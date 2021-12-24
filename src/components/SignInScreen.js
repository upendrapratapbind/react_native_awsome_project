/* eslint-disable prettier/prettier */
import React from "react";
import { View,Text,StyleSheet,Dimensions, TextInput, TouchableOpacity,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../utility/context";
import SocialButton from "../assets/CustomButton/SocialButton";

const SignInScreen = () => {
    const navigation = useNavigation();
 const [data, setData] = React.useState({
     userEmail:'',
     password:'',
     check_textInputChange:false,
     secureTextEntry:true,
     isValidEmail:true,
     isValidPassword:true,

 });
 const {signIn} = React.useContext(AuthContext);

 const textInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if( reg.test(val) === true) {
        setData({
            ...data,
            userEmail: val,
            check_textInputChange: true,
            isValidEmail: true,
        });
    } else {
        setData({
            ...data,
            userEmail: val,
            check_textInputChange: false,
            isValidEmail: false,
        });
    }
};
const handlePasswordChange = (val) => {
    if( val.trim().length >= 8) {
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
const loginHandle = (userEmail,password) =>{
    signIn(userEmail,password);
};

const handleValidEmail = (val) =>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
if (reg.test(val) === true)
{
  setData({
      ...data,
      isValidEmail:true,
  });
}
else {
    setData({
    ...data,
    isValidEmail:false,
    });
}
} 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.title}>Welcome</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action_view}>
                <FontAwesome name="user-o" color='#05375a' size={20}/>
                <TextInput placeholder="Your Email"
                style={styles.textInput} autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}
                onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}/>
               
                {data.check_textInputChange?
                 <Animatable.View animation="bounceIn" >
                <Feather name="check-circle" color="green" size={16}/>
                </Animatable.View>
                :null}
                
            </View>
            {data.isValidEmail ? null : <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Please enter valid EmailId</Text>
            </Animatable.View> }
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
            {data.isValidPassword ? null : <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters</Text>
            </Animatable.View>}

            <TouchableOpacity style={styles.forgetButtonView}>
                <Text style={styles.forgetButtonText}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity style ={styles.signIn} onPress={()=>{loginHandle(data.userEmail,data.password)}}>
                <LinearGradient style={styles.signIn}  colors={['#08d4c4','#01ab9d']}>
                    <Text style={styles.textSign}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
                
                <View style={styles.button}>
                <TouchableOpacity style={[styles.navBarLeftButton,{borderColor:'#009387',borderWidth:1}]}>
       <FontAwesome name="facebook" color='#05375a' size={22} />
       <Text style={[styles.textSocialSign,{color:'#009387'}]}>Sign in with Facebook</Text>
    </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={[styles.navBarLeftButton,{borderColor:'#009387',borderWidth:1}]}>
       <FontAwesome name="google" color='#05375a' size={22} />
       <Text style={[styles.textSocialSign,{color:'#009387'}]}>Sign in with Google</Text>
    </TouchableOpacity>
            </View>
            </View>
            </Animatable.View>
        </View>
    );
};
export default SignInScreen;
const {height} = Dimensions.get('screen');
const {height_logo} = height * 0.28;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:5,
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
        fontSize:18,
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
        marginTop:20,
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
    errorMsg:{
        color:'red',
    },
    forgetButtonView: {
alignItems:'flex-end',
justifyContent:'flex-end',
marginTop:5,
    },
    forgetButtonText:{
        fontWeight:"bold",
        fontSize:14,
        color:"#009387",
    },
    navBarLeftButton: {
        paddingRight: 50,
        paddingLeft: 50,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
       
      },
      textSocialSign:{
        color:'white',
        fontWeight:'bold',
        marginLeft:70,
    },
      
});
