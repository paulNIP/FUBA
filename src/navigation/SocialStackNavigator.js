import { createStackNavigator } from "@react-navigation/stack";
import Social from "../screens/social/Social";

const SocialStack = createStackNavigator();

const  SocialStackNavigator=() =>{
  return (
    <SocialStack.Navigator>
      <SocialStack.Screen name="Social" component={Social} />
      {/* <SocialStack.Screen name="Details" component={DetailsScreen} /> */}
    </SocialStack.Navigator>
  );
}

export default SocialStackNavigator;