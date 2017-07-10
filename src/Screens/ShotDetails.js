// @flow
import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import {
  ShotDetailsInfoBlock,
  ShotDetailsPopularityInfoBlock,
  ShotDetailsDescriptionBlock,
  Placeholder,
} from '../Components';

const Container = styled.ScrollView`
  padding-left: 16;
  padding-right: 16;
  padding-top: 8;
`;

const Shot = styled.Image`
  max-width: 100%;
  min-height: 200;
  border-radius: 2;
`;

class ShotDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const {
      avatar,
      createdAt,
      title,
      authorName,
      shot,
      likesCount,
      commentsCount,
      viewsCount,
      description,
      commentsUrl,
    } = navigation.state.params;
    return {
      headerStyle: {
        backgroundColor: 'lightpink',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      avatar,
      createdAt,
      title,
      authorName,
      shot,
      likesCount,
      commentsCount,
      viewsCount,
      description,
      commentsUrl,
    };
  };

  state = {
    width: 0,
    height: 0,
    loading: true,
  };

  componentWillMount() {
    const imageUri = this.props.navigation.state.params.shot;
    Image.prefetch(imageUri);
  }

  componentDidMount() {
    const params = this.props.navigation.state.params;
    const { shot } = params;
    Image.getSize(shot, (width, height) => {
      this.setState({ width, height });
    });
  }

  onLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const params = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    const {
      shot,
      likesCount,
      commentsCount,
      viewsCount,
      description,
      commentsUrl,
    } = params;
    const counts = {
      likesCount,
      commentsCount,
      viewsCount,
    };
    const { width, height, loading } = this.state;
    return (
      <Container>
        <ShotDetailsInfoBlock dataShot={params} />
        <Placeholder loading={loading}>
          <Shot
            onLoad={this.onLoad}
            style={{ width, height }}
            source={{ uri: shot }}
          />
        </Placeholder>
        <ShotDetailsPopularityInfoBlock
          counts={counts}
          navigateToComments={() =>
            navigate('Comments', {
              commentsUrl,
            })}
        />
        <ShotDetailsDescriptionBlock description={description} />
      </Container>
    );
  }
}
export { ShotDetails };
