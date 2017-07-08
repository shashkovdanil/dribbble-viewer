import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
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
  static navigationOptions = ({ navigation }) => {
    const { commentsUrl } = navigation.state.params;
    return {
      title: 'Comments',
      headerStyle: {
        backgroundColor: 'lightpink'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
      commentsUrl
    };
  };

  state = {
    comments: []
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const params = this.props.navigation.state.params;
    const { commentsUrl } = params;
    const { comments } = this.state;
    setTimeout(() => {
      fetchData(commentsUrl)
        .then(comments => this.setState(prevState => ({
          comments: [...prevState.comments, ...comments]
        })));
    }, 1500);
  };

  render() {
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
        renderItem={({ item }) =>
          <Comment
            name={item.user.name}
            avatar={item.user.avatar_url}
            commentText={item.body}
          />
        }
        keyExtractor={item => item.id}
      />
    );
  }
}

export { Comments };