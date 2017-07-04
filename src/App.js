import { StackNavigator } from 'react-navigation';

import { Main, ShotDetails } from './Screens';

const App = StackNavigator({
  Main: { screen: Main },
  ShotDetails: { screen: ShotDetails }
});

export default App;
