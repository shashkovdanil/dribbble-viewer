// @flow
import React from 'react';
import styled from 'styled-components/native';

// Icons
const dribbbleIcon = require('../Icons/dribbble.png');
const trophyIcon = require('../Icons/trophy.png');
const likeIcon = require('../Icons/like.png');
const ideaIcon = require('../Icons/idea.png');

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
        source={dribbbleIcon}
      />
    );
  } else if (iconName === 'trophy') {
    return (
      <StyledImage
        style={{ tintColor }}
        source={trophyIcon}
      />
    );
  } else if (iconName === 'like') {
    return (
      <StyledImage
        style={{ tintColor }}
        source={likeIcon}
      />
    );
  }
  return (
    <StyledImage style={{ tintColor }} source={ideaIcon} />
  );
};

export { TabBarIcon };
