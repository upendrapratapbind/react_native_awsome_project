/* eslint-disable prettier/prettier */
import  React from "react";
import { View,Text, StyleSheet, Dimensions, Image, Button,StatusBar} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from "./SignInScreen";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                        <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image animation='bounceIn' duration={1500} style={styles.logo} source={require('../assets/Images/shopping.png')}/>

            </View>
            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
               <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
               colors={['#08d4c4','#01ab9d']}
               style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                    </LinearGradient>
                    
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
export default SplashScreen;
const {height} = Dimensions.get('screen');
const {height_logo} = height * 0.28;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        backgroundColor:'#009387',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
        width:300,
        height:300,
        alignItems:'flex-start',
    },
    title:
    {
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },
    text:{
        color:'white',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
    },
    textSign:{
        color:'white',
        fontWeight:'bold',
    },
});
