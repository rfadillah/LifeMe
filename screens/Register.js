import { Box, Text, Image, VStack, Center, Pressable } from 'native-base'
import { Alert } from 'react-native';
import React, { useState } from 'react'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator, TextInput, PwdInput, FooterAuth } from "../component"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase';

const Register = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const auth = getAuth(app)

  const handleRegister = () => {
    if ( email=="" || password=="" || password2==""){
      Alert.alert("isi email & password")
      return;
    } else if (password != password2) {
      Alert.alert("password tidak sama")
      return;
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created")
        const user = userCredential.user;
        console.log(user)
        navigation.navigate("Login")
        Alert.alert("Success sign up!")
      })
      .catch(error => {
        Alert.alert(error.message)
        console.log(error)
        return;
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
          <Image source={require("../assets/logo_vertical.png")} alt="logo" w="42%" mt="2%" ml="-4%" resizeMode='contain'/>
          <Separator height={"1%"}/>
          <Text fontFamily={"Poppins_500Medium"} fontSize="36px" color="white">Halo!</Text>
          <Text fontFamily={"Poppins_400Regular"} fontSize="16px" color={"#FFFFFF"} opacity="0.6">Buatlah akunmu untuk melanjutkan</Text>
          <Separator height={"4%"}/>
          <VStack space={4}>
            <TextInput placeholder={"Masukkan email"} label={"Email"} oct={text => setEmail(text)} value={email}/>
            <PwdInput placeholder={"Masukkan password"} label={"Password"} oct={text => setPassword(text)} value={password}/>
            <PwdInput placeholder={"Masukkan password"} label={"Konfirmasi Password"} oct={text => setPassword2(text)} value={password2}/>
          </VStack>
          <Separator height={"5%"}/>
        </Box>
        <Center>
          <BtnPrimary text={"Sign up"} bgc={"#FFFFFF"} tc={"#2F8189"} o={1} onPress={handleRegister}/>
          <Separator height={"9%"}/>
          <Box flexDir={"row"}>
            <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"}>Sudah mendaftar?</Text>
            <Pressable onPress={()=> navigation.navigate("Login")}>
              <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} textDecorationLine="underline">Sign in</Text>
            </Pressable>
          </Box>
        </Center>
      </Box>
      <Box flex={1}>
        <FooterAuth/>
      </Box>
    </Box>
  ) : (
    <AppLoading/>
  )
}

export default Register