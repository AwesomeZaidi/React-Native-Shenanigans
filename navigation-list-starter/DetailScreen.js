import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import DetailFeature from './DetailFeature'

// This screen displays details about a breed. It takes 
// in a breed object with all of the properties. Remember 
// not all breeds have all or the same properties. 
// To solve this we loop through all keys and display 
// each key and it's value in a DetailFeature 

const DetailScreen = (props) => {
  const { navigate, getParam, state } = props.navigation
  const { breed } = state.params

  const keys = Object.keys(state.params)
  const features = []
  keys.forEach((key, i) => {
    if (key !== 'breed') {
      features.push(<DetailFeature key={key} label={key} value={state.params[key]} />)
    }
  })

  return (
    <ScrollView>
      <View styles={styles.container}>
        <Text style={styles.title}>{breed}</Text>
        {features}
      </View>
    </ScrollView>
  )
}

export default DetailScreen


const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: 10
  }, 
  feature: {
    fontSize: 16,
    margin: 10
  },
  scrollView: {
    flex: 1,
  },
  container: {
    margin: 10
  }
})