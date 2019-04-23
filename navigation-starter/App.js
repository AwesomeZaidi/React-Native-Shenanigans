import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
// Import "Screen" component
import ClickerScreen from './ClickerScreen';


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }, // Default Screen
  Clicker: { screen: ClickerScreen }, // Add a screen
  Details: { screen: ClickerScreen } // Add a screen
})

const App = createAppContainer(MainNavigator)

export default App