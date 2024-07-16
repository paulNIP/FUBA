import * as React from 'react';
import { Button, Text, View } from 'react-native';

const VideoStream=({navigation})=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>VideoStream screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default VideoStream;