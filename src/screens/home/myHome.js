import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CONFIG from 'react-native-config';

export default class MyHome extends Component {
  static navigationOptions = {
    title: 'My Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title={`Go to Detail ${CONFIG.EXAMPLE}`}
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Button
          title={`Logout ${CONFIG.EXAMPLE}`}
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}
