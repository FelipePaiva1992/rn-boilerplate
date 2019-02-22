import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

export default class MyDetail extends Component {
  static navigationOptions = {
    title: 'My Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Detail Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Your Details"
          onPress={() => this.props.navigation.navigate('yourDetails')}
        />
      </View>
    );
  }
}
