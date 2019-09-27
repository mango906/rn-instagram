import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './MainScreen';
import WriteMedia from './WriteMedia';

const HomeTabBar = createStackNavigator(
  {
    Main: MainScreen,
    WriteMedia: WriteMedia
  },
  { initialRouteName: 'Main' }
);

export default createAppContainer(HomeTabBar);
