import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';

const Avatar = styled.Image`
  width: 48;
  height: 48;
  border-radius: 24;
  margin-right: 16;
  margin-left: 2;
  margin-top: 2;
  margin-bottom: 2;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 2;
  margin-bottom: 8;
  max-width: 100%;
`;

const TextContainer = styled.View`
  flex-direction: column;
  width: 80%;
`;

const Title = styled.Text`
  font-size: 18;
`;

const Description = styled.Text`
  color: darkgray;
`;

const ShotDetailsInfoBlock = ({ dataShot }) => {
  const { avatar, createdAt, title, authorName } = dataShot;
  const date = moment(createdAt).format('MMM D, YYYY');
  return (
    <InfoContainer>
      <Avatar source={{ uri: avatar }} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>by {authorName} on {date}</Description>
      </TextContainer>
    </InfoContainer>
  );
};

export { ShotDetailsInfoBlock };
