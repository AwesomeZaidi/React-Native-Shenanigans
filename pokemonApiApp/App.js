/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createAppContainer, createStackNavigator } from 'react-navigation';
//Import your screens 
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';


//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
  //Define your screens.
  Home: { screen: Home },
  PokeList: { screen: PokeList },
  PokeCard: { screen: Pokemon },
}, {
  initialRouteName:  'Home'
});

const AppContainer = createAppContainer(RootStack);

//Export default the stateless component 
// const App = () => {
//   return <RootStack />
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   pokeListHeader: {
//     fontSize: 20,
//     color: '#fff'
//   }
// });

export default AppContainer;
// export default App;