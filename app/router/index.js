import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "../index"
import CharacterScreen from "../character/index";

const Router = createStackNavigator({
  Home: HomeScreen,   //Home: { screen: Home }
  Character: CharacterScreen  //Character: { screen: Character }
}, {
  initialRouteName: "Home",
  headerMode: "none"
});

export default createAppContainer(Router);