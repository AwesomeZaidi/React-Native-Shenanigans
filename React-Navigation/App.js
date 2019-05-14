import React from 'react';
import { createRootNavigator,
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
	SwitchNavigator
} from 'react-navigation';
import { Provider } from "react-redux";
import store from "./redux/store";

// ----------------------------------------------------------------------------------
// Components Imports
// ----------------------------------------------------------------------------------
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
		Home: HomeScreen,
		Detail: DetailScreen
});

// Idea to split the stacks  for organization, by Nicolai!
const AuthStack = createStackNavigator({ 
	SignUp: SignUpScreen,
	SignIn: SignInScreen
});

// Containers are responsible for managing your app state and linking your top-level navigator to the app environment.
// TODO: hmm what is the switchNavigator being used here for?
// to only ever show one screen at a time. By default, it does not handle back
// actions and it resets routes to their default state when you switch away.
// This is the exact behavior that we want from the authentication flow: when users sign in,
// we want to throw away the state of the authentication flow and unmount all of the screens, and when
// we press the hardware back button we expect to not be able to go back to the authentication flow.
// We switch between routes in the SwitchNavigator by using the navigate action.
// the switch stack which determines if logged in, the shows one of above
const MainNavigator = createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		// We set the initialRouteName to 'AuthLoading' because we will fetch our authentication
		// state from persistent storage inside of that screen component.
		initialRouteName: 'AuthLoading',
	}
));

// Render the app container component with the provider around it
class App extends React.Component {
	render() {
	  return (
		<Provider store={store}>
		  <MainNavigator />
		</Provider>
	  );
	}
  }


export default App;

// onNavigationStateChange(prevState, newState, action)
// Function that gets called every time navigation state managed by the navigator changes.It receives the previous state, the
// new state of the navigation and the action that issued state change. By default it prints state changes to the console.

// uriPrefix
// The prefix of the URIs that the app might handle.
// This will be used when handling a deep link to extract the path passed to the router.
