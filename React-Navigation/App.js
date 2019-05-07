import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './pages/Home/'
import DetailScreen from './pages/Detail/'
import SignUpScreen from './pages/AuthScreens/SignUp/'
import SignInScreen from './pages/AuthScreens/SignIn/'
import AuthLoadingScreen from './pages/AuthScreens/AuthLoading';

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
	SignIn: SignInScreen,
	SignUp: SignUpScreen
});

// Containers are responsible for managing your app state and linking your top-level navigator to the app environment.
// TODO: hmm what is the switchNavigator being used here for?
// to only ever show one screen at a time. By default, it does not handle back
// actions and it resets routes to their default state when you switch away.
// This is the exact behavior that we want from the authentication flow: when users sign in,
// we want to throw away the state of the authentication flow and unmount all of the screens, and when
// we press the hardware back button we expect to not be able to go back to the authentication flow.
// We switch between routes in the SwitchNavigator by using the navigate action.
const App = createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},  {
		// We set the initialRouteName to 'AuthLoading' because we will fetch our authentication
		// state from persistent storage inside of that screen component.
		initialRouteName: 'AuthLoading',
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
