/* eslint-disable prettier/prettier */
import * as React from 'react';
import {  View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer ,DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import MainStackScreen from './src/screens/MainStackScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MyCartScreen from './src/screens/MyCartScreen';
import SupportScreen from './src/screens/SupportScreen';
import DrawerStackScreen from './src/screens/DrawerStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './src/utility/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider ,DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isloading,setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme,setIsDarkTheme] = React.useState(this);

  const initialLoginState = {
    isloading:true,
    userEmail:null,
    userToken:null,
  };
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'#ffffff',
      text:'#333333',
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background:'#ffffff',
      text:'#333333',
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const loginReducer = (prevState,action) =>{
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isloading:false,
        };
        case 'LOGIN':
          return {
            ...prevState,
            userEmail: action.id,
            userToken: action.token,
            isloading:false,
          };
          case 'LOGOUT':
            return {
              ...prevState,
              userEmail:null,
              userToken:null,
              isloading:false,
            };
            case 'REGISTER':
              return {
                ...prevState,
                userEmail: action.id,
                userToken: action.token,
                isloading:false,
              };
    }
  };
  const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);
  const authContext = React.useMemo(()=> ({
    signIn: async (userEmail,password) =>{
      // setUserToken("Upendra")
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if (userEmail === 'upendrabind026@gmail.com' && password === 'pass1234')
      {
        try {
        userToken = 'dfndfg';
        await AsyncStorage.setItem('userToken', userToken);
        }
        catch(e)
        {
          console.log(e);

        }
      }
      console.log('user token:',userToken);
      dispatch({type: 'LOGIN',id:userEmail, token: userToken});
    },
    signOut:async () =>{
      // setUserToken(null)
      // setIsLoading(false);
      dispatch({type: 'LOGOUT'});

    },
    signUp: () =>{
      // setUserToken("Upendra")
      // setIsLoading(false);
    },
     toggleTheme : () =>{
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }),[]);
  React.useEffect(() =>{
    setTimeout( async()=>
    {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        }
        catch (e)
        {
          console.log(e);

        }
      dispatch({type: 'REGISTER', token : userToken });

    },1000);
  },[]);
  if (loginState.isloading)
  {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme} >
      {loginState.userToken != null ? (
        <Drawer.Navigator drawerContent={props => <DrawerStackScreen {...props}/>}>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="MyCart" component={MyCartScreen}/>
        <Drawer.Screen name="Support" component={SupportScreen}/>
      </Drawer.Navigator>) : <MainStackScreen/>
      }
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
};
export default App;
