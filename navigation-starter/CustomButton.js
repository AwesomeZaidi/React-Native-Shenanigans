import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const CustomButton = ({ label, onPress, StyleSheet }) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
    >
      <Text
        style={styles.label}
      >{label}</Text>
    </TouchableHighlight>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 6,
    margin: 10
  },
  label: {
    color: '#fff'
  }
})