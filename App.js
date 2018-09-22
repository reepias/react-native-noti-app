import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import firebase from 'react-native-firebase'

export default class App extends Component {

  componentDidMount() {
    this.initNotification()
  }

  initNotification = async () => {
    await this.setPermission()
    const fcmToken = await firebase.messaging().getToken()
    console.log('fcmToken', fcmToken)
  }

  setPermission = async () => {
    try {
      const enabled = await firebase.messaging().hasPermission()
      if (!enabled) {
        await firebase.messaging().requestPermission()
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Firebase Cloud Messaging 
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
