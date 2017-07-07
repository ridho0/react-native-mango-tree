import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class mangoTree extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Game Over!
        </Text>
        <Image source={require('../assets/4.png')} />
        <Button
          onPress={() => navigate('welcome')}
          title="home"
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
  }
});
