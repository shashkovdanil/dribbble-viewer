import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';
import App from './src/App';

export default class dribbbleRN extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('dribbbleRN', () => dribbbleRN);
