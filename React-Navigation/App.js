import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
});

const App = createAppContainer(x  );

export default App;
