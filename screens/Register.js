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
import { BtnPrimary, Separator, TextInput } from "../component"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase';

const Register = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(app)

  const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Account created")
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => navigation.navigate("Login"))
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
            <TextInput placeholder={"Masukkan password"} label={"Password"} oct={text => setPassword(text)} value={password}/>
            <TextInput placeholder={"Masukkan password"} label={"Konfirmasi Password"}/>
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
        <Image source={require("../assets/footer.png")} alt="footer" resizeMode='contain' position={"absolute"}/>
        <Box flex={1} justifyContent="center" alignItems={"center"}>
          <Pressable onPress={() => Alert.alert("Sorry, this feature is unavailable")}>
            <Image source={require("../assets/sosmed.png")} alt="sosmed"  W="60%" resizeMode="contain" zIndex={1}/>
          </Pressable>
        </Box>
      </Box>
    </Box>
  ) : (
    <AppLoading/>
  )
}

export default Register