import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from './CustomButton'

class ClickerScreen extends Component {

  static navigationOptions = {
    title: 'Clicker'
  };

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    // Get Params from navigator 
    const { navigation } = this.props
    const value = navigation.getParam('value', 1)
    this.setState({ count: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.count}
        >{this.state.count}</Text>
        <CustomButton 
          label="Click!"
          onPress={() => this.setState({ count: this.state.count + 1 })} 
        />

        <CustomButton
          label='New Clicker'
          onPress={() => this.props.navigation.navigate('Clicker', {value: 99})}
        />
      </View>
    )
  }
}

export default ClickerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontSize: 60,
    margin: 20,
    fontWeight: 'bold'
  }
})