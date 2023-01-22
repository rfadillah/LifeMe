import { Box, Text, Image, VStack, Center, Pressable } from 'native-base'
import { Alert } from "react-native"
import React, { useState } from 'react'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator, TextInput, PwdInput, FooterAuth } from "../component"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase';


const Login = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(app)

  const handleLogin = () => {
    if ( email=="" || password=="" ){
      Alert.alert("isi email & password")
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("login")
      const user = userCredential.user;
      console.log(user)
      navigation.navigate("HomeStack")
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeStack" }],
      })
    })
    .catch(error => {
        Alert.alert(error.code)
        console.log(error)
        return
      })
  }

  const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_500Medium,
      Poppins_400Regular
  });
  return fontsLoaded ? (
    <Box flex={1} backgroundColor="#3B939B" >
      <Box flex={5}>
        <Box pl="6%">
          <Image source={require("../assets/logo-lifeme-invert.png")} alt="logo" w="42%" mt="2%" h="20%" resizeMode='contain' ml="1%"/>
          <Separator height={"3%"}/>
          <Text fontFamily={"Poppins_500Medium"} fontSize="36px" color="white">Selamat Datang!</Text>
          <Text fontFamily={"Poppins_400Regular"} fontSize="16px" color={"#FFFFFF"} opacity="0.6">Sign in untuk melanjutkan</Text>
          <Separator height={"7%"}/>
          <VStack space={4}>
            <TextInput placeholder={"Masukkan email"} label={"Email"} oct={text => setEmail(text)} value={email}/>
            <PwdInput placeholder={"Masukkan password"} label={"Password"} oct={text => setPassword(text)} value={password}/>
            <Box maxW={"88%"}>
              <Box alignItems={"flex-end"}>
                <Pressable onPress={() => Alert.alert("Sorry, this feature is unavailable")}>
                  <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} >Lupa password?</Text>
                </Pressable>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Center>
          <BtnPrimary text={"Sign in"} bgc={"#FFFFFF"} tc={"#2F8189"} o={1} onPress={handleLogin}/>
          {/* <Separator height={"1%"}/> */}
          <Box flexDir={"row"} mt="10px">
            <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"}>Belum mendaftar?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")}>
              <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} textDecorationLine="underline">Sign up</Text>
            </Pressable>
          </Box>
        </Center>
      </Box>
      <Box flex={1} >
        <FooterAuth/>
      </Box>
    </Box>
  ) : (
    <AppLoading/>
  )
}

export default Login