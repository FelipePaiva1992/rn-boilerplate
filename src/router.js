import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Animated, Easing } from 'react-native';

import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Home from './screens/home';
import Detail from './screens/detail';

export const createAppNavigator = initialRouteName => {
  return createBottomTabNavigator(
    {
      Home: { screen: Home },
      Detail: { screen: Detail },
    },
    { initialRouteName }
  );
};

export const createRootNavigator = initialRouteName => {
  return createStackNavigator(
    {
      SignIn: { screen: SignIn },
      SignUp: { screen: SignUp },
      Home: { screen: createAppNavigator('Home') },
    },
    {
      initialRouteName,
      headerMode: 'none',
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0,
        },
      }),
    }
  );
};
