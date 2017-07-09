// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 8;
  background-color: white;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 8;
  padding-right: 8;
  border-radius: 2;
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

type ShotDetailsDescriptionBlockProps = {
  description: string
};

const ShotDetailsDescriptionBlock = ({
  description,
}: ShotDetailsDescriptionBlockProps) =>
  (description
    ? <Container>
      <HTMLView value={description.replace(/\n/g, '')} stylesheet={styles} />
    </Container>
    : null);

export { ShotDetailsDescriptionBlock };
