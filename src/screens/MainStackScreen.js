/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../components/SplashScreen";
import SignInScreen from "../components/SignInScreen";
import SignUpScreen from "../components/SignUpScreen";
const MainStack = createStackNavigator();

const MainStackScreen = ({navigation}) => (
    <MainStack.Navigator headerShown={false} >
        <MainStack.Screen options={{headerTitle: 'Test', headerShown: false}} name="SplashScreen" component={SplashScreen}/>
        <MainStack.Screen options={{headerTitle: 'Test', headerShown: false}} name="SignInScreen" component={SignInScreen}/>
        <MainStack.Screen options={{headerTitle: 'Test', headerShown: false}} name="SignUpScreen" component={SignUpScreen}/>

    </MainStack.Navigator>
);

export default MainStackScreen;
