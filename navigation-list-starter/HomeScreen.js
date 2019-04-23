import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import BreedNameCell from './BreedNameCell'
import { cats, dogs } from './breeds'

// Home screen displays a list of animals by breed
// using flat list. 
// The data supplied to FlatList is cats you can switch this 
// to dogs if you like
// FlatList displays a list of BreedNameCells. 
// Notice BreedNameCell defines an onPress function here. 
// Tapping this cell should display the detail screen and 
// information about the breed. 
// Take a quick look at BreedNameCell.js before moving on 
// to DetailScreen.js
// After looking at DetailScreen.js you need to implement 
// onPress to navigate to DetailScreen.js and pass the 
// breed data as a prop.

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'By Breed'
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
  }

  render() {
    // You'll need this to navigate to DetailScreen
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.list}
          data={cats}
          renderItem={({item}) => (<BreedNameCell
            onPress={() => navigate('Detail', item)}
            item={item}
            />)}
          keyExtractor={(item, index) => `${index}-${item.breed}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%'
  },
  cell: {
    width: '100%'
  },
  separator: {
    
  },
  segmentedControl: {
    width: 150,
    margin: 10
  }
});
