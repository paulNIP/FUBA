import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Social=({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Social screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default Social;