import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

export default class YourDetail extends Component {
  static navigationOptions = {
    title: 'Your Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your Detail Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('myDetails')}
        />
      </View>
    );
  }
}
