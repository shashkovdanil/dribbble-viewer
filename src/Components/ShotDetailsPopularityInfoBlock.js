// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const likesCountIcon = require('../Icons/likecount.png');
const commentsCountIcon = require('../Icons/commentscount.png');
const viewCountIcon = require('../Icons/viewcount.png');

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

type ShotDetailsPopularityInfoBlockProps = {
  counts: Object,
  navigateToComments: () => any,
};

const ShotDetailsPopularityInfoBlock = ({
  counts,
  navigateToComments,
}: ShotDetailsPopularityInfoBlockProps) =>
  (<Container>
    <CountContainer>
      <Icon source={likesCountIcon} />
      <Text>
        {counts.likesCount}
      </Text>
    </CountContainer>
    <CountContainer>
      <TouchableOpacity onPress={counts.commentsCount > 0 ? () => navigateToComments() : null}>
        <Icon source={commentsCountIcon} />
        <Text>
          {counts.commentsCount}
        </Text>
      </TouchableOpacity>
    </CountContainer>
    <CountContainer>
      <Icon source={viewCountIcon} />
      <Text>
        {counts.viewsCount}
      </Text>
    </CountContainer>
  </Container>);

export { ShotDetailsPopularityInfoBlock };
