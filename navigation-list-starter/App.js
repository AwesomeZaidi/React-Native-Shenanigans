import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

// Stack Navigator
// This stack contains two Screens
// Go to HomeScreen.js
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }, // Displays  list of animals
  Detail: { screen: DetailScreen } // Displays Animal details 
})

const App = createAppContainer(MainNavigator)

export default App
