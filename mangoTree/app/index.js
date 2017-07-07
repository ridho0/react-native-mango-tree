import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import StartScreen from './components/start'
import EndScreen from './components/end'

export default class mangoTree extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={() => {}}
          // value={this.state.text}
        />
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={() => {}}
          // value={this.state.text}
        />
        <Button
          onPress={() => navigate('start')}
          title="start"
          color="#357560"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52A386',
  },
  welcome: {
    fontSize: 30,
    color: 'white'
  }
});

const App = StackNavigator({
  welcome: { screen: mangoTree },
  start: { screen: StartScreen },
  end: { screen: EndScreen }
})

// AppRegistry.registerComponent('mangoTree', () => App);
