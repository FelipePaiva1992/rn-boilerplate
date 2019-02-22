import { createStackNavigator } from 'react-navigation';

import MyHome from './myHome';

const TabCarNavigator = createStackNavigator(
  {
    myHome: { screen: MyHome },
  },
  {
    initialRouteName: 'myHome',
  }
);

export default TabCarNavigator;
