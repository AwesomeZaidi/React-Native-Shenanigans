// ----------------------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------------------
import React from 'react';
import {
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import BandsScreen from './pages/Bands/';
import StatsScreen from './pages/Stats/';
import common from './pages/styles/common.style';

const TabNavigator = createBottomTabNavigator(
  {
    Bands: BandsScreen,
    Stats: StatsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const MainNavigator = createAppContainer(TabNavigator);

class App extends React.Component {
	render() {
	  return (
		// <Provider store={store}>
		  <MainNavigator style={common.pageBg}/>
		// </Provider>
	  );
	};
};

export default App;