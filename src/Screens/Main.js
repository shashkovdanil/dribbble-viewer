// @flow
import { TabNavigator } from 'react-navigation';

import MainScreenHOC from '../HOC/MainScreenHOC';
import { ShotList } from '../Components';

const Main = TabNavigator(
  {
    All: {
      screen: MainScreenHOC({
        title: 'All',
        typeShots: 'default',
        icon: 'dribbble',
      })(ShotList),
    },
    Debuts: {
      screen: MainScreenHOC({
        title: 'Debuts',
        typeShots: 'debuts',
        icon: 'trophy',
      })(ShotList),
    },
    Animated: {
      screen: MainScreenHOC({
        title: 'Animated',
        typeShots: 'animated',
        icon: 'like',
      })(ShotList),
    },
    Rebounds: {
      screen: MainScreenHOC({
        title: 'Rebounds',
        typeShots: 'rebounds',
        icon: 'idea',
      })(ShotList),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'lightpink',
      },
    },
  },
);

export { Main };
