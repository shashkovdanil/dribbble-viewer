import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const PlaceholderContainer = styled.View`
  max-width: 100%;
  min-height: 200;
  border-radius: 2;
`;

const PlaceholderText = styled.Text`
  text-align: center;
  font-size: 20;
  color: white;
`;

const Placeholder = ({ loading, children }) =>
  <PlaceholderContainer style={{ backgroundColor: loading ? 'lightpink' : null }}>
    {loading ? <PlaceholderText>Loading... Wait pls... 😴</PlaceholderText> : null}
    {children}
  </PlaceholderContainer>;

export { Placeholder };
