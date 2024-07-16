import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from "../screens/shop/ShopScreen";

const ShopStack = createStackNavigator();

const  ShopStackNavigator=() =>{
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="ShopScreen" component={ShopScreen} />
      {/* <ShopStack.Screen name="Details" component={DetailsScreen} /> */}
    </ShopStack.Navigator>
  );
}

export default ShopStackNavigator;