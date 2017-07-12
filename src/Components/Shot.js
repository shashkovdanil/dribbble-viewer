// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components/native';

import { Placeholder } from './Placeholder';

const ShotImage = styled.Image`
  width: ${props => props.widthShot};
  height: ${props => props.heightShot};
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
    uri: string,
    widthShot: string,
    heightShot: string
  };

  render() {
    const { uri, widthShot, heightShot } = this.props;
    return (
      <Placeholder loading={this.state.loading}>
        <ShotImage
          widthShot={widthShot}
          heightShot={heightShot}
          onLoad={this.onLoad}
          source={{ uri }}
        />
      </Placeholder>
    );
  }
}

export { Shot };
