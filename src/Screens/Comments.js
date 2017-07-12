// @flow
import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Comment } from '../Components';
import fetchData from '../Utils/apiHelper';

const PlaceholderContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: lightpink;
`;

const PlaceholderText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20;
`;

class Comments extends PureComponent {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { commentsUrl } = this.props.navigation.state.params;
    setTimeout(() => {
      fetchData(commentsUrl).then(comments =>
        this.setState(prevState => ({
          comments: [...prevState.comments, ...comments],
        })),
      );
    }, 1500);
  };

  props: {
    navigation: {
      navigate: () => any,
      state: {
        params: {
          commentsUrl: string
        }
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { comments } = this.state;
    if (comments.length === 0) {
      return (
        <PlaceholderContainer>
          <PlaceholderText>
            Ohh... Wait pls... Comments will be loaded soon...😴😴😴
          </PlaceholderText>
        </PlaceholderContainer>
      );
    }
    return (
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <Comment
            navigateToAuthor={() => navigate('Author', {
              authorBio: item.user.bio,
              authorLocation: item.user.location,
              authorShotsUrl: item.user.shots_url,
              authorName: item.user.name,
              avatar: item.user.avatar_url,
            })}
            name={item.user.name}
            avatar={item.user.avatar_url}
            commentText={item.body}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

export { Comments };
