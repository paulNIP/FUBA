import { View,Text } from "react-native";
const AddCard=()=>{
    return (
        <>
            <View>
                <Text>Card Holder Name</Text>
                <Text>Card Number</Text>
                <View style={{flexDirection:'row'}}>
                    <View>
                      <Text>Expiry Date </Text>

                    </View>
                    <View style={{marginRight:'auto'}}>
                       <Text>CVV</Text>

                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                      <Text>Save Card</Text>
                </View>
            </View>
        </>
    )
}

export default AddCard;