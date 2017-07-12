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
      title: navigation.state.params.title,
    }),
  },
  Comments: {
    screen: Comments,
    navigationOptions: () => ({
      title: 'Comments',
      headerStyle: {
        backgroundColor: 'lightpink',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
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
    }),
  },
});

export default App;
