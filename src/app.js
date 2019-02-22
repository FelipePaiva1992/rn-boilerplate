import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './router';

const initialRouteName = 'SignIn';
export default createAppContainer(createRootNavigator(initialRouteName));
