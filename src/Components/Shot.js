// @flow
import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

import { Placeholder } from './Placeholder';

const ShotImage = styled.Image`
  width: 100%;
  height: 400;
  background-color: transparent;
  resizeMode: cover;
`;

class Shot extends PureComponent {
  state = {
    loading: true,
  };

  onLoad = () => {
    this.setState({ loading: false });
  };

  props: {
    uri: string
  };

  render() {
    const { uri } = this.props;
    return (
      <Placeholder loading={this.state.loading}>
        <ShotImage onLoad={this.onLoad} source={{ uri }} />
      </Placeholder>
    );
  }
}

export { Shot };
