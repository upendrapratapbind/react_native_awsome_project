/* eslint-disable prettier/prettier */
import React from "react";
import { View,Text,StyleSheet,Dimensions, TextInput, Image,TouchableOpacity,StatusBar, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUpScreen = () => {
    const [image, setImage] = React.useState(null);
    const addImage=()=>{};
    const navigation = useNavigation();
 const [data, setData] = React.useState({
     email:'',
     password:'',
     check_textInputChange:false,
     secureTextEntry:true,

 });
 const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true,
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false,
        });
    }
};
const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true,
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false,
        });
    }
};
const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry,
    });
};

    return(
      
        <ScrollView style={styles.container}>
            
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.title}>Register Now!</Text>
            <View style={styles.imageContainer}>
            {
            image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        }
            
            <View style={styles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                    <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>
            </View>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action_view}>
            <Feather name="smile" color='#05375a' size={20}/>

                <TextInput placeholder="Your Name"
                style={styles.textInput} autoCapitalize="none"
                />
               
                
                
            </View>
            <Text style={styles.text_footer}>Mobile Number</Text>
            <View style={styles.action_view}>
            <Feather name="file" color='#05375a' size={20}/>

                <TextInput placeholder="Your Mobile Number"
                style={styles.textInput} autoCapitalize="none"
                />
               
               
                
            </View>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action_view}>
                <FontAwesome name="user-o" color='#05375a' size={20}/>
                <TextInput placeholder="Your Email"
                style={styles.textInput} autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}/>
               
                {data.check_textInputChange?
                 <Animatable.View animation="bounceIn" >
                <Feather name="check-circle" color="green" size={16}/>
                </Animatable.View>
                :null}
                
            </View>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action_view}>
                <Feather name="lock" color='#05375a' size={20}/>
                <TextInput placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput} autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}/>
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                    <Feather name="eye-off" color="grey" size={16}/>
                    : <Feather name="eye" color="grey" size={16}/>}
               
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <LinearGradient style={styles.signIn} colors={['#08d4c4','#01ab9d']}>
                    <Text style={styles.textSign}>Sign Up</Text>
                </LinearGradient>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>
        </ScrollView>
    );
};
export default SignUpScreen;
const {screen_height} = Dimensions.get('screen');
const {height_logo} = screen_height * 0.28;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },
    imageContainer:{
        elevation:2,
        height:130,
        width:130,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:4,
        backgroundColor:'#fff',
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
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
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
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
    },
    text_footer:{
        color:'#05375a',
        fontSize:16,
    },
    action_view: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button:{
        alignItems:'center',
        marginTop:10,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign:{
        color:'white',
        fontWeight:'bold',
    },
});
