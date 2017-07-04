import React, { Component } from 'react';
import { Image } from 'react-native';

import { TabBarIcon } from '../Components';

const MainScreenHOC = ({title, type, icon}) => WrappedComponent =>
  class MainScreenHOC extends Component {
    static navigationOptions = {
      title,
      tabBarIcon: ({ tintColor }) =>
        <TabBarIcon iconName={icon} tintColor={tintColor} />
    };

    state = {
      loading: false,
      data: [],
      page: 1,
      type,
      refreshing: false
    };

    componentDidMount = () => {
      this.fetchShots();
    };

    fetchShots = () => {
      const { page, type } = this.state;
      const url = `https://api.dribbble.com/v1/shots/?list=${type}&per_page=10&page=${page}`;
      const accessToken = '7a22f910dcdff63bd3ebbe48d022f05e8268c67249709b5489d923f97bcf96ec';
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
          .then(res => res.json())
          .then(data =>
            this.setState(prevState => ({
              data: page === 1 ? data : [...prevState.data, ...data],
              loading: !prevState.loading,
              refreshing: false
            }))
          );
      }, 1500);
    };

    loadMoreShots = () => {
      this.setState(prevState => ({ page: prevState.page + 1 }), () => this.fetchShots());
    };

    handleRefresh = () => {
      this.setState(
        {
          page: 1,
          refreshing: true
        },
        () => this.fetchShots()
      );
    };

    renderFooter = () => {
      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    };

    render() {
      const { data, refreshing } = this.state;
      const { navigate } = this.props.navigation;
      console.log(data);
      return (
        <WrappedComponent
          navigateToShotDetail={(item) =>
            navigate(
              'ShotDetails',
              {
                avatar: item.user.avatar_url,
                createdAt: item.created_at,
                title: item.title,
                authorName: item.user.name,
                shot: item.images.normal
              }
            )}
          data={data}
          onEndReached={this.loadMoreShots}
          refreshing={refreshing}
          onRefresh={this.handleRefresh}
        />
      );
    }
  };

export default MainScreenHOC;
