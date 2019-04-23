import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

class HomeScreen extends Component {
  static navigationOptions = { // this belongs to the navigator itself.
    title: 'Home'
  }

  render() {
    const { navigation } =this.props;
    const { navigate } = navigation

    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
        >Home Screen</Text>

        <CustomButton label='Hello'
        onPress={() => navigate('Details')}/>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
})