import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './pages/Home/'
import DetailScreen from './pages/Detail/'
import SignUpScreen from './pages/AuthScreens/SignUp/'
import SignInScreen from './pages/AuthScreens/SignIn/'

// createStackNavigator: provides a way for the app to transition between
// screens where each new screen is placed on top of a stack.
// API Definition: createStackNavigator(RouteConfigs, StackNavigatorConfig);
// RouteConfigs: route configs object is a mapping from route name to a route config,
// which tells the navigator what to present for that route.
// TODO: navigationOptions for screens inside of the navigator
// I don't fully understand that tbh ^ I think for now I just need to understand the title option...
const AppStack = createStackNavigator({
  // // For each screen that you can navigate to, create a new entry like this:
	Home: {
		screen: HomeScreen // `HomeScreen` is a React component that will be the main content of the screen.
	},
	Detail: {
		screen: DetailScreen
	}	
});

// Idea to split the stacks  for organization, by Nicolai!
const AuthStack = createStackNavigator({ 
	SignUp: SignUpScreen, 
	SignIn: SignInScreen 
});

// Containers are responsible for managing your app state and linking your top-level navigator to the app environment.
// TODO: hmm what is the switchNavigator being used here for?
const App = createAppContainer(createSwitchNavigator(
	{
		App: AppStack,
		Auth: AuthStack,
	}
));
// Now App is the main component for React to render

// Props of createAppContainer on React Native
{/* <AppContainer
  onNavigationStateChange={handleNavigationChange}
  uriPrefix="/app"
/> */}

// onNavigationStateChange(prevState, newState, action)
// Function that gets called every time navigation state managed by the navigator changes.It receives the previous state, the
// new state of the navigation and the action that issued state change. By default it prints state changes to the console.

// uriPrefix
// The prefix of the URIs that the app might handle.
// This will be used when handling a deep link to extract the path passed to the router.

export default App;
