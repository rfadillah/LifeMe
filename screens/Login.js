import { Box, Text, Image, Input, VStack, Center } from 'native-base'
import React from 'react'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator, TextInput } from "../component"
import { TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
  const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_500Medium,
      Poppins_400Regular
  });
  return fontsLoaded ? (
    <Box flex={1} backgroundColor="#3B939B" >
      <Box pl="6%">
        <Image source={require("../assets/logo_vertical.png")} alt="logo" w="42%" mt="2%" ml="-4%" resizeMode='contain'/>
        <Separator height={"4%"}/>
        <Text fontFamily={"Poppins_500Medium"} fontSize="36px" color="white">Selamat Datang!</Text>
        <Text fontFamily={"Poppins_400Regular"} fontSize="16px" color={"#FFFFFF"} opacity="0.6">Sign in untuk melanjutkan</Text>
        <Separator height={"7%"}/>
        <VStack space={4}>
          <TextInput placeholder={"Masukkan email"} label={"Email"}/>
          <TextInput placeholder={"Masukkan password"} label={"Password"}/>
          <Box maxW={"88%"}>
            <Box alignItems={"flex-end"}>
              <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} >Lupa password?</Text>
            </Box>
          </Box>
        </VStack>
        <Separator height={"2%"}/>
      </Box>
      <Center>
        <BtnPrimary text={"Sign in"} bgc={"#FFFFFF"} tc={"#2F8189"} o={1} onPress={()=> navigation.navigate("Home")}/>
        <Separator height={"9%"}/>
        <Box flexDir={"row"}>
          <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"}>Belum mendaftar?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
            <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} textDecorationLine="underline">Sign up</Text>
          </TouchableOpacity>
        </Box>
      </Center>
      {/* <Box width={"100%"} height={"1%"} backgroundColor={"white"} borderTopRadius={"100px"}></Box> */}
    </Box>
  ) : (
    <AppLoading/>
  )
}

export default Login