import React from "react";
import {View,Text,TouchableOpacity} from "react-native"

const DefaultButton =()=>{
    return(
        <>
            <View>
                <TouchableOpacity onPress={()=>{}}>
                    <Text>{'Hello'}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default DefaultButton;