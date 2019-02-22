import { AppRegistry } from 'react-native';
import Root from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Root);
