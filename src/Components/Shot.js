import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 100%;
  height: 400;
  background-color: transparent;
  resizeMode: cover;
`;

const Shot = ({ uri }) => <StyledImage source={{ uri }} />;

export { Shot };
