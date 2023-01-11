import React from "react";
import { Login, Register, Home, Jurnal, Finance, Other, Account, Landing } from "./screens";
import { NavigationContainer } from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base"; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabList = () => {
  return(
    <Tab.Navigator 
      initialRouteName={Home}
      screenOptions = {({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if(rn == Home){
            iconName = focused ?  'home' : 'home-outline'
          }else if (rn == Jurnal){
            iconName = focused ?  'book' : 'book-outline'
          }else if (rn == Finance){
            iconName = focused ?  'wallet' : 'wallet-outline'
          }else if (rn == Other){
            iconName = focused ?  'list' : 'list-outline'
          }else if (rn == Account){
            iconName = focused ?  'accessibility' : 'accessibility-outline'
          }
          
          
          return <Ionicons name={iconName} size={size} color={color}></Ionicons>

        },          
        tabBarStyle:{
          height:70, 
          padding:10, 
          // position:'absolute', 
          // bottom:15, left:20, 
          // right:20, elevation:0, 
          // borderRadius:35,
          backgroundColor:'#594545'
        }, 
      })}
      tabBarOptions = {{
        activeTintColor:'#FFFFFF',
        inactiveTintColor:'#cc9999',
        labelStyle:{paddingBottom:10, fontSize:13, fontWeight:'reguler'},
      }}
    >
      <Tab.Screen name={'Home'} component={Home} options={{ headerTitleAlign: 'center'}}/>
      <Tab.Screen name={'Jurnal'} component={Jurnal} options={{ headerTitleAlign: 'center'}}/>
      <Tab.Screen name={'Finance'} component={Finance} options={{ headerTitleAlign: 'center'}}/>
      <Tab.Screen name={'Other'} component={Other} options={{ headerTitleAlign: 'center'}}/>
      <Tab.Screen name={'Account'} component={Account} options={{ headerTitleAlign: 'center'}}/>
    </Tab.Navigator>
  )
}

const App = () =>{
  return(
    <NativeBaseProvider >
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={"Landing"} component={Landing}/>
          <Stack.Screen name={"Login"} component={Login} options={{headerShown:true}}/>
          <Stack.Screen name={"Register"} component={Register}/>
          <Stack.Screen name={"HomeStack"} component={TabList}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}


export default App;


  

