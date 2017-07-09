import { StackNavigator } from 'react-navigation';

import { Main, ShotDetails, Comments } from './Screens';

const App = StackNavigator({
  Main: { screen: Main },
  ShotDetails: { screen: ShotDetails },
  Comments: { screen: Comments },
});

export default App;
