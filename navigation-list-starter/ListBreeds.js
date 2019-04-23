import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import BreedNameCell from './BreedNameCell'

const ListBreeds = ({ data, navigate }) => {
  return (
    <FlatList 
      style={styles.list}
      data={data}
      renderItem={({item}) => <BreedNameCell onPress={() => {
        navigate('Detail', item)
      }} item={item} />}
      keyExtractor={(item, index) => `${index}-${item.breed}`}
    />
  )
}

export default ListBreeds

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%'
  }, 
  cell: {
    borderBottomWidth: 1, 
    margin: 10
  }
})