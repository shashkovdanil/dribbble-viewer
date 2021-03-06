// @flow
import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { TabBarIcon } from '../Components';
import fetchData from '../Utils/apiHelper';

type ComponentData = {
  typeShots: string,
  icon: string,
  title: string
};

const MainScreenHOC = ({ title, typeShots, icon }: ComponentData) => (
  WrappedComponent: Class<React$Component<*, *, *>>,
) => class MainScreenComponent extends PureComponent {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon iconName={icon} tintColor={tintColor} />
    ),
    title,
  });

  state = {
    loading: false,
    data: [],
    page: 1,
    type: typeShots,
    refreshing: false,
  };

  componentDidMount() {
    this.fetchShots();
  }

  fetchShots = () => {
    const { page, type } = this.state;
    const url = `https://api.dribbble.com/v1/shots/?list=${type}&per_page=10&page=${page}`;
    this.setState({ loading: true });
    setTimeout(() => {
      fetchData(url).then(data =>
        this.setState(prevState => ({
          data: page === 1 ? data : [...prevState.data, ...data],
          loading: !prevState.loading,
          refreshing: false,
        })),
      );
    }, 1500);
  };

  loadMoreShots = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.fetchShots(),
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => this.fetchShots(),
    );
  };

  renderFooter = () => (
    <View style={{ paddingVertical: 20 }}>
      <ActivityIndicator color="lightpink" animating size="large" />
    </View>
  );

  props: {
    navigation: {
      navigate: (
        string,
        {
          avatar: string,
          createdAt: string,
          title: string,
          authorName: string,
          shot: string,
          likesCount: string,
          commentsCount: string,
          viewsCount: string,
          description: string,
          commentsUrl: string,
          authorBio: string,
          authorLocation: string,
          authorShotsUrl: string
        }
      ) => any
    }
  };

  render() {
    const { data, refreshing } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <WrappedComponent
        navigateToShotDetail={item =>
          navigate('ShotDetails', {
            avatar: item.user.avatar_url,
            createdAt: item.created_at,
            title: item.title,
            authorName: item.user.name,
            shot: item.images.normal,
            likesCount: item.likes_count,
            commentsCount: item.comments_count,
            viewsCount: item.views_count,
            description: item.description,
            commentsUrl: item.comments_url,
            authorBio: item.user.bio,
            authorLocation: item.user.location,
            authorShotsUrl: item.user.shots_url,
          })}
        data={data}
        onEndReached={this.loadMoreShots}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }
};

export default MainScreenHOC;
