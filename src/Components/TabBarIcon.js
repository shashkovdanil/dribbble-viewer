// @flow
import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 24;
  height: 24;
`;

type TabBarIconProps = {
  iconName: string,
  tintColor: string
};

const TabBarIcon = ({ iconName, tintColor }: TabBarIconProps) => {
  if (iconName === 'dribbble') {
    return (
      <StyledImage
        style={{ tintColor }}
        source={require('../Icons/dribbble.png')}
      />
    );
  } else if (iconName === 'trophy') {
    return (
      <StyledImage
        style={{ tintColor }}
        source={require('../Icons/trophy.png')}
      />
    );
  } else if (iconName === 'like') {
    return (
      <StyledImage
        style={{ tintColor }}
        source={require('../Icons/like.png')}
      />
    );
  }
  return (
    <StyledImage style={{ tintColor }} source={require('../Icons/idea.png')} />
  );
};

export { TabBarIcon };
