import { TabNavigator } from 'react-navigation';

import MainScreenHOC from './HOC/MainScreenHOC';
import { ShotList } from './Components';

const App = TabNavigator(
  {
    All: { screen: MainScreenHOC('default', 'dribbble')(ShotList) },
    Debuts: { screen: MainScreenHOC('debuts', 'trophy')(ShotList) },
    Animated: { screen: MainScreenHOC('animated', 'like')(ShotList) },
    Rebounds: { screen: MainScreenHOC('rebounds', 'idea')(ShotList) }
  },
  {
    tabBarOptions: {
      activeTintColor: 'palevioletred'
    }
  }
);

export default App;
