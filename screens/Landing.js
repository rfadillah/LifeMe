import { Box, Image, Text, NativeBaseProvider, extendTheme, Center, VStack, HStack, Button, Pressable } from 'native-base'
import { Alert } from 'react-native';
import React from 'react'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator } from "../component"


const Landing = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
    });
    return fontsLoaded ? (
        <Box flex={1} backgroundColor="#3B939B">
            <Box flex={5} backgroundColor="#FFFFFF">
                <Box flex={1} backgroundColor="#3B939B" borderBottomRightRadius="90px">
                    <Center>
                        <Image
                            source={require('../assets/landing_pic.png')}
                            alt="landing_pic"
                            w="89%"
                            h="89%"
                            resizeMode="contain"
                        />
                    </Center>  
                </Box>
            </Box>
            <Box flex={7} backgroundColor="#FFFFFF" borderTopLeftRadius="90px">
                <Center>
                    <Text fontFamily="Poppins_700Bold" fontSize="40px" mt="45px" color="#2F8189">Hello!</Text>
                    <Box maxW="72%">
                        <Text textAlign="center" fontFamily="Poppins_500Medium" fontSize="14px" color="#A1A1A1">Welcome to Life Me app. A platform to help you being a better person ❤️</Text> 
                    </Box> 
                    <Separator height={30}/>
                    <BtnPrimary text={"Sign in"} bgc={"#2F8189"} tc={"#FFFFFF"} o={1} onPress={()=> navigation.navigate("Login")}/>
                    <Separator height={2}/>
                    <Box width="50%" >
                        <HStack alignItems="center" justifyContent="center">
                            <Box h="1px" w="20%" backgroundColor="#A1A1A1"></Box>
                            <Text textAlign="center" fontFamily="Poppins_500Medium" fontSize="14px" color="#A1A1A1" mx="10px">or</Text> 
                            <Box h="1px" w="20%" backgroundColor="#A1A1A1"></Box>
                        </HStack>
                    </Box>
                    <Separator height={1}/>
                    <BtnPrimary text={"Sign up"} bgc={"#B6D2F5"} tc={"#2F8189"} o={0.7} onPress={()=> navigation.navigate("Register")} />
                    <Separator height={5}/>
                    <Text textAlign="center" fontFamily="Poppins_500Medium" fontSize="14px" color="#A1A1A1" mx="10px">or sign in with social media</Text> 
                    <Pressable onPress={() => Alert.alert("Sorry, this feature is unavailable")}>
                        <Image source={require("../assets/sosmed.png")} alt="sosmed" mt="5%" W="60%" resizeMode="contain"/>
                    </Pressable>
                </Center>
            </Box>
        </Box>
    ) : (
        <AppLoading/>
    )
}

export default Landing
