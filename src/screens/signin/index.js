import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CONFIG from 'react-native-config';

import { SessionContext } from './../../stores';
import SimpleText from './../../components/commons/simpleText';

export default class MyHome extends Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    return (
      <SessionContext.Provider>
        <SessionContext.Consumer>
          {(user, setUser) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SimpleText primary>Login</SimpleText>
              <SimpleText secondary>Screen</SimpleText>
              <Button
                title={`Home ${CONFIG.EXAMPLE}`}
                onPress={() => this.props.navigation.navigate('Home')}
              />
              <Button
                title={`Sigin Up ${CONFIG.EXAMPLE}`}
                onPress={() => this.props.navigation.navigate('SignUp')}
              />
            </View>
          )}
        </SessionContext.Consumer>
      </SessionContext.Provider>
    );
  }
}
