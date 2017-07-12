// @flow
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import styled from 'styled-components/native';

const CommentContainer = styled.View`
  flex-direction: row;
  background-color: white;
  max-width: 100%;
  margin-top: 1;
  margin-bottom: 1;
`;

const Avatar = styled.Image`
  width: 48;
  height: 48;
  border-radius: 24;
  margin-right: 16;
  margin-left: 6;
  margin-top: 6;
  margin-bottom: 6;
`;

const TextContainer = styled.View`
  flex-direction: column;
  width: 80%;
  margin-top: 6;
  margin-bottom: 6;
`;

const Name = styled.Text`
  font-size: 18;
  margin-bottom: 4;
`;

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#ff3366',
  },
  p: {
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: 'black',
  },
});

type CommentProps = {
  name: string,
  avatar: string,
  commentText: string,
  navigateToAuthor: () => any
};

const Comment = ({ name, avatar, commentText, navigateToAuthor }: CommentProps) => (
  <CommentContainer>
    <TouchableOpacity onPress={navigateToAuthor}>
      <Avatar source={{ uri: avatar }} />
    </TouchableOpacity>
    <TextContainer>
      <Name>{name}</Name>
      <HTMLView value={commentText.replace(/\n/g, '')} stylesheet={styles} />
    </TextContainer>
  </CommentContainer>
);

export { Comment };
