import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}
        >About Screen</Text>
        <CustomButton 
          label="Home" 
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <CustomButton 
          label="Clicker" 
          onPress={() => this.props.navigation.navigate('Clicker')}
        />
      </View>
    )
  }
}

export default AboutScreen

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