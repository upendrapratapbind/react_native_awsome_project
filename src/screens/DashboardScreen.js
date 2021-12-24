/* eslint-disable prettier/prettier */
import React from "react";
import {Text,View,Button,StyleSheet} from "react-native"
import { useTheme } from "@react-navigation/native";
const DashboardScreen = () => {
    const {colors} = useTheme();
    return(
        <View style={styles.container}>
        <Text style={{color:colors.text}}>Dashboard Screen</Text>
        <Button title="Click Here"
        onPress={()=> alert('Button Clicked')}/>

    </View>
    );
};
export default DashboardScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});