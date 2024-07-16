import { createStackNavigator } from "@react-navigation/stack";
import VideoStream from "../screens/multimedia/VideoStream";

const StreamStack = createStackNavigator();

const  StreamingStackNavigator=() =>{
  return (
    <StreamStack.Navigator>
      <StreamStack.Screen name="Videos" component={VideoStream} />
      {/* <StreamStack.Screen name="Details" component={DetailsScreen} /> */}
    </StreamStack.Navigator>
  );
}

export default StreamingStackNavigator;