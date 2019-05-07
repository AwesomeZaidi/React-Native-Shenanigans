import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

// createStackNavigator: provides a way for the app to transition between
// screens where each new screen is placed on top of a stack.
// API Definition: createStackNavigator(RouteConfigs, StackNavigatorConfig);
// RouteConfigs: route configs object is a mapping from route name to a route config,
// which tells the navigator what to present for that route.
// TODO: navigationOptions for screens inside of the navigator
// I don't fully understand that tbh ^ I think for now I just need to understand the title option...
const MainNavigator = createStackNavigator({
  // // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen // `HomeScreen` is a React component that will be the main content of the screen.
  },
  Detail: { screen: DetailScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
