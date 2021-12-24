/* eslint-disable prettier/prettier */
import React from "react";
import {Text,View,Button,StyleSheet} from "react-native"
const MyCartScreen = () => {
    return(
        <View style={styles.container}>
        <Text>MyCart Screen</Text>
        <Button title="Click Here"
        onPress={()=> alert('Button Clicked')}/>

    </View>
    );
};
export default MyCartScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});