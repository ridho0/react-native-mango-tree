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
    console.log("this.props.navigation",this.props.navigation);
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This is {}, he is {} years's old.
        </Text>
        <Image source={require('../assets/0.png')} />
        <Button
          onPress={() => navigate('end')}
          title="grow"
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
