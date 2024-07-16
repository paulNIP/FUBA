import { createStackNavigator } from "@react-navigation/stack";
import HomeFeed from "../screens/news/HomeFeed";


const ShopStack = createStackNavigator();

const  NewsStackNavigator=() =>{
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="NewsScreen" component={HomeFeed} />
      {/* <ShopStack.Screen name="Details" component={DetailsScreen} /> */}
    </ShopStack.Navigator>
  );
}

export default NewsStackNavigator;