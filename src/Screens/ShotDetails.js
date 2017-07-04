import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

import { ShotDetailsInfoBlock } from '../Components';

const Container = styled.View`
  margin-left: 16;
  margin-right: 16;
  margin-top: 8;
`;

const Shot = styled.Image`
  width: 100%;
  min-height: 400;
  margin-top: 8;
`;

class ShotDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    avatar: navigation.state.params.avatar,
    createdAt: navigation.state.params.createdAt,
    title: navigation.state.params.title,
    authorName: navigation.state.params.authorName,
    shot: navigation.state.params.shot
  });

  render() {
    const params = this.props.navigation.state.params;
    const { shot } = params;
    return (
      <Container>
        <ShotDetailsInfoBlock dataShot={params} />
        <Shot source={{ uri: shot }} />
      </Container>
    );
  }
}

export { ShotDetails };
