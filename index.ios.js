import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import App from './src/App';

const dribbbleRN = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <App />
  </View>
);

AppRegistry.registerComponent('dribbbleRN', () => dribbbleRN);
