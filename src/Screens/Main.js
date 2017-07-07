import { TabNavigator } from 'react-navigation';

import MainScreenHOC from '../HOC/MainScreenHOC';
import { ShotList } from '../Components';

const Main = TabNavigator(
  {
    All: {
      screen: MainScreenHOC({
        title: 'All',
        type: 'default',
        icon: 'dribbble'
      })(ShotList)
    },
    Debuts: {
      screen: MainScreenHOC({
        title: 'Debuts',
        type: 'debuts',
        icon: 'trophy'
      })(ShotList)
    },
    Animated: {
      screen: MainScreenHOC({
        title: 'Animated',
        type: 'animated',
        icon: 'like'
      })(ShotList)
    },
    Rebounds: {
      screen: MainScreenHOC({
        title: 'Rebounds',
        type: 'rebounds',
        icon: 'idea'
      })(ShotList)
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: 'lightpink'
      }
    },
  }
);

export { Main };
