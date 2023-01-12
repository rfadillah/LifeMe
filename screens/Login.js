import { Box, Text, Image, VStack, Center, Pressable } from 'native-base'
import { Alert } from 'react-native';
import React from 'react'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator, TextInput } from "../component"
// import { TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
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
          <Separator height={"4%"}/>
          <Text fontFamily={"Poppins_500Medium"} fontSize="36px" color="white">Selamat Datang!</Text>
          <Text fontFamily={"Poppins_400Regular"} fontSize="16px" color={"#FFFFFF"} opacity="0.6">Sign in untuk melanjutkan</Text>
          <Separator height={"7%"}/>
          <VStack space={4}>
            <TextInput placeholder={"Masukkan email"} label={"Email"}/>
            <TextInput placeholder={"Masukkan password"} label={"Password"}/>
            <Box maxW={"88%"}>
              <Box alignItems={"flex-end"}>
                <Pressable onPress={() => Alert.alert("Sorry, this feature is unavailable")}>
                  <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} >Lupa password?</Text>
                </Pressable>
              </Box>
            </Box>
          </VStack>
          <Separator height={"2%"}/>
        </Box>
        <Center>
          <BtnPrimary text={"Sign in"} bgc={"#FFFFFF"} tc={"#2F8189"} o={1} onPress={()=> navigation.navigate("HomeStack")}/>
          <Separator height={"9%"}/>
          <Box flexDir={"row"}>
            <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"}>Belum mendaftar?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")}>
              <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6" pr={"5px"} textDecorationLine="underline">Sign up</Text>
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

export default Login