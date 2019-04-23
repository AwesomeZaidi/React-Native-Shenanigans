import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailFeature = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {value}</Text>
      <View style={{...styles.bar, width: `${100 * value / 5}%`}}></View>
    </View>
  )
}

export default DetailFeature

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  label: {
    fontSize: 16
  },
  bar: {
    height: 10,
    backgroundColor: 'red'
  }
})