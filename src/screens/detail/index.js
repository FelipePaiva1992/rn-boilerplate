import { createStackNavigator } from 'react-navigation';

import MyDetails from './myDetails';
import YourDetails from './yourDetails';

const TabCarNavigator = createStackNavigator(
  {
    myDetails: { screen: MyDetails },
    yourDetails: { screen: YourDetails },
  },
  {
    initialRouteName: 'myDetails',
  }
);

export default TabCarNavigator;
