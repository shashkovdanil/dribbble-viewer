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

  props: {
    navigation: Object
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
      authorBio,
      authorLocation,
      authorShotsUrl,
      authorName,
      avatar,
    } = params;
    const counts = {
      likesCount,
      commentsCount,
      viewsCount,
    };
    const { width, height, loading } = this.state;
    const navigateToAuthor = () =>
      navigate('Author', {
        authorBio,
        authorLocation,
        authorShotsUrl,
        authorName,
        avatar,
      });
    return (
      <Container>
        <ShotDetailsInfoBlock
          dataShot={params}
          navigateToAuthor={navigateToAuthor}
        />
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
          navigateToAuthor={navigateToAuthor}
        />
        <ShotDetailsDescriptionBlock description={description} />
      </Container>
    );
  }
}
export { ShotDetails };
