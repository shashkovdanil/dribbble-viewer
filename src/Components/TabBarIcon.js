import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 24;
  height: 24;
`;

const TabBarIcon = ({ iconName, tintColor }) => {
  if (iconName === 'dribbble') {
    return <StyledImage style={{ tintColor }} source={require('../Icons/dribbble.png')} />;
  } else if (iconName === 'trophy') {
    return <StyledImage style={{ tintColor }} source={require('../Icons/trophy.png')} />;
  } else if (iconName === 'like') {
    return <StyledImage style={{ tintColor }} source={require('../Icons/like.png')} />;
  } else if (iconName === 'idea') {
    return <StyledImage style={{ tintColor }} source={require('../Icons/idea.png')} />;
  }
}

export { TabBarIcon };
