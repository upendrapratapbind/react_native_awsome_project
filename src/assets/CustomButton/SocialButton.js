/* eslint-disable prettier/prettier */
import React from "react";
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { windowHeight } from "../../utility/Dimension";
const SocialButton = ({buttonTitle,btnType,color,backgroundColor, ...rest}) =>{
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style={styles.buttonContainer}{...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} size={22} color={color}/>
            </View>
            <View style={styles.btnTxtWrapper}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default SocialButton;
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:'#2e6435',
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:3,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:"center",
    },
    icon:{
        fontWeight:'bold',
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})