import { createStackNavigator } from "@react-navigation/stack";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/home/HomeScreen";
import { Badge, Icon } from '@rneui/themed';

const HomeStack = createStackNavigator();

const  HomeStackNavigator=() =>{
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <View style={{flexDirection:"row", marginLeft:8}}>
            <TouchableOpacity>
              <MaterialCommunityIcons  name='menu' size={25} />
            </TouchableOpacity>
          </View>
         ),
        headerRight: () => (
          <View style={{marginRight:10}}>
                  {/* <TouchableOpacity onPress={()=>{
                    navigation.navigate('AppFeedBack');
                    }}>
                    <MaterialCommunityIcons  name='menu' size={25} />
                  </TouchableOpacity> */}
                  <View style={styles.iconContainer}>
                    <Icon
                      name="bell"
                      type="font-awesome"
                      size={25}
                    />
                    <Badge
                      value="5"
                      status="error"
                      containerStyle={styles.badgeContainer}
                    />
                  </View>
          </View>
         )}}  />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({

  badgeContainer: {
    position: 'absolute',
    top: -2,
    right: -2,
  },
});

export default HomeStackNavigator;