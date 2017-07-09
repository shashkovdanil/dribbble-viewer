// @flow
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 8;
  margin-bottom: 8;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 2;
  height: 52;
`;

const CountContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.3%;
`;

const Icon = styled.Image`
  width: 16;
  height: 16;
`;

const ShotDetailsPopularityInfoBlock = ({ counts, navigateToComments }) => {
  const { likesCount, commentsCount, viewsCount } = counts;
  return (
    <Container>
      <CountContainer>
        <Icon source={require('../Icons/likecount.png')} />
        <Text>
          {likesCount}
        </Text>
      </CountContainer>
      <CountContainer>
        <TouchableOpacity onPress={() => navigateToComments()}>
          <Icon source={require('../Icons/commentscount.png')} />
        </TouchableOpacity>
        <Text>
          {commentsCount}
        </Text>
      </CountContainer>
      <CountContainer>
        <Icon source={require('../Icons/viewcount.png')} />
        <Text>
          {viewsCount}
        </Text>
      </CountContainer>
    </Container>
  );
};

export { ShotDetailsPopularityInfoBlock };
