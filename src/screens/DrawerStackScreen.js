/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from "react";
import {View,StyleSheet} from 'react-native';
import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
import DashboardScreen from "./DashboardScreen";
import ProfileScreen from "./ProfileScreen";
import MyCartScreen from "./MyCartScreen";
import SupportScreen from "./SupportScreen";
import { AuthContext } from "../utility/context";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DrawerStackScreen = (props) => {
  const paperTheme = useTheme();
  const {signOut,toggleTheme} = React.useContext(AuthContext);
return (
<View style={styles.drawerContent}>
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerContent}>
    <View style={styles.userInfoSection}>
      <View style={styles.avatarView}>
        <Avatar.Image
        source={require('../assets/Images/profile_icon.png')} size={50}/>
        <View style={styles.aboutView}>
          <Title style={styles.title}>Upendra Pratap Bind</Title>
          <Caption style={styles.caption}>upendra.bind@kelltontech.com</Caption>
        </View>
      </View>
    </View>
    <Drawer.Section style={styles.drawerSection}>
    <DrawerItem
   icon={({color,size}) => (
     <Icon
     name="home-outline"
     color={color}
     size={size}
     />
   )}
   label="Dashboard"
   onPress={()=>{props.navigation.navigate('Dashboard')}}
   >

   </DrawerItem>
   <DrawerItem
   icon={({color,size}) => (
     <Icon
     name="account-outline"
     color={color}
     size={size}
     />
   )}
   label="Profile"
   onPress={()=>{props.navigation.navigate('Profile')}}
   >

   </DrawerItem>
    <DrawerItem
   icon={({color,size}) => (
     <Icon
     name="cart-outline"
     color={color}
     size={size}
     />
   )}
   label="My Cart"
   onPress={()=>{props.navigation.navigate('MyCart')}}
   >

   </DrawerItem>
   <DrawerItem
   icon={({color,size}) => (
     <Icon
     name="account-check-outline"
     color={color}
     size={size}
     />
   )}
   label="Support"
   onPress={()=>{props.navigation.navigate('Support')}}
   >

   </DrawerItem>
    </Drawer.Section>
    <Drawer.Section title="Preference">
      <TouchableRipple onPress={()=>{toggleTheme()}}>
        <View style={styles.preference}>
          <Text>Dark Theme</Text>
          <View pointerEvents="none">
          <Switch value= {paperTheme.dark}/>
          </View>
        </View>
      </TouchableRipple>
    </Drawer.Section>
    </View>

  </DrawerContentScrollView>
 <Drawer.Section style={styles.bottomDrawerSection}>
   <DrawerItem
   icon={({color,size}) => (
     <Icon
     name="exit-to-app"
     color={color}
     size={size}
     />
   )}
   label="Sign Out"
   onPress={()=>{signOut()}}
   >

   </DrawerItem>

 </Drawer.Section>
</View>
);
};
export default DrawerStackScreen;
const styles = StyleSheet.create({
  drawerContent:{
    flex:1,
  },
  userInfoSection:{

    paddingLeft:5,

  },
  title:{
    fontSize:16,
    marginTop:3,
    fontWeight:'bold',
  },
  subtitle:{
    fontSize:16,
    marginLeft:60,
  },
  caption:{
    fontSize:14,
    lineHeight:14,
  },
  row:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
  },
  section:{
flexDirection:'row',
alignItems:'center',
marginRight:15,
  },
  paragraph:{
    fontWeight:'bold',
    marginRight:3,
  },
  drawerSection:{
    marginTop:15,
  },
  bottomDrawerSection:{
    marginBottom:15,
    borderTopColor:'#f4f4f4',
    borderTopWidth:1,
  },
  preference:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:12,
    paddingHorizontal:16,
  },
  avatarView:{
    flexDirection:'row',
    marginTop:15,
  },
  aboutView:{
    marginLeft:8,
    flexDirection:'column',
  },
});