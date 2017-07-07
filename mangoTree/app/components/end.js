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
import { StackNavigator, NavigationActions } from 'react-navigation'

export default class mangoTree extends Component {
  render() {
    const { navigate } = this.props.navigation
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'welcome'})
      ]
    })
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You just found {}! ANd he's dead. He's old anyway...
        </Text>
        <Image source={require('../assets/4.png')} />
        <Text style={styles.text}>
          Game Over!
        </Text>
        <Button
          onPress={() => this.props.navigation.dispatch(resetAction)}
          title="Back to Home"
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
  text: {
    fontSize: 20,
    color: 'white'
  }
});
