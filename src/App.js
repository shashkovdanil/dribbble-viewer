// @flow
import { StackNavigator } from 'react-navigation';

import { Main, ShotDetails, Comments, Author } from './Screens';

const App = StackNavigator({
  Main: { screen: Main },
  ShotDetails: {
    screen: ShotDetails,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'lightpink',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      avatar: navigation.state.params.avatar,
      createdAt: navigation.state.params.createdAt,
      title: navigation.state.params.title,
      authorName: navigation.state.params.authorName,
      shot: navigation.state.params.shot,
      likesCount: navigation.state.params.likesCount,
      commentsCount: navigation.state.params.commentsCount,
      viewsCount: navigation.state.params.viewsCount,
      description: navigation.state.params.description,
      commentsUrl: navigation.state.params.commentsUrl,
      authorBio: navigation.state.params.authorBio,
      authorLocation: navigation.state.params.authorLocation,
      authorShotsUrl: navigation.state.params.authorShotsUrl,
    }),
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      title: 'Comments',
      headerStyle: {
        backgroundColor: 'lightpink',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      commentsUrl: navigation.state.params.commentsUrl,
    }),
  },
  Author: {
    screen: Author,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'lightpink',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
      title: navigation.state.params.authorName,
      name: navigation.state.params.authorName,
      bio: navigation.state.params.authorBio,
      location: navigation.state.params.authorLocation,
      shotsUrl: navigation.state.params.authorShotsUrl,
    }),
  },
});

export default App;
