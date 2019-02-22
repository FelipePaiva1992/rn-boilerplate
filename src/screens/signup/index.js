import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CONFIG from 'react-native-config';

export default class MyHome extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cadastro Screen</Text>
        <Button
          title={`Home ${CONFIG.EXAMPLE}`}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title={`Sigin In ${CONFIG.EXAMPLE}`}
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}
