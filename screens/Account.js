import { Box, Text, Button, Pressable, Image, Center, ArrowBackIcon, HStack, ChevronRightIcon, InfoIcon, InfoOutlineIcon } from 'native-base'
import { Alert } from 'react-native';
import React from 'react'
import AppLoading from 'expo-app-loading';
import { BtnPrimary, Separator, TextInput, PwdInput, FooterAuth } from "../component"
import { getAuth } from "firebase/auth"
import { app } from '../firebase';

const Account = ({ navigation }) => {

  const auth = getAuth(app)

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login")
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      })
      .catch(error => {
        Alert.alert(error.code)
        console.log(error)
        return
      })
  }

  return (
    <Box flex={1} backgroundColor="#3B939B">
      <Box flex={4} backgroundColor="#F5F5F5">
        <Box flex={1} backgroundColor="#3B939B" borderBottomRightRadius="90px">
          <HStack space={2}>
            <ArrowBackIcon mt="5%" size="5" pl="10%" color="#FFFFFF" />
            <Text mt="5%" pl="60%" color="#FFFFFF">Your Account</Text>
          </HStack>
          <HStack>
            <InfoOutlineIcon ml="30%" color="#FFFFFF" />
            <Center>
              <Image
                source={require('../assets/landing_pic.png')}
                alt="landing_pic"
                mt="5%"
                w="100px"
                h="100px"
              />
              <Text color="#FFFFFF" fontSize="30px" Bold>Task 141</Text>
              <Text color="#FFFFFF">Task141@gmail.com</Text>
              <Text color="#FFFFFF">+62 123456789</Text>
            </Center>
          </HStack>
        </Box>
      </Box>
      <Box flex={7} backgroundColor="#F5F5F5" borderTopLeftRadius="90px">
        <Box flex={1} backgroundColor="#FFFFFF" mr="5%" ml="5%" mb="2%">
          <Text color="#3B939B" ml="10%" mt="5%">Account</Text>
          <Box>
            <Pressable ml="10%" mr="10%" backgroundColor="#F5F5F5" rounded="8" p="5">
              <HStack space={2}>
                <Text>Edit Profile</Text>
                <ChevronRightIcon size="5" pl="138%" />
              </HStack>
            </Pressable>
            <Pressable ml="10%" mr="10%" backgroundColor="#F5F5F5" rounded="8" p="5">
              <HStack space={2}>
                <Text>Akun</Text>
                <ChevronRightIcon size="5" pl="165%" />
              </HStack>
            </Pressable>
            <Pressable ml="10%" mr="10%" backgroundColor="#F5F5F5" rounded="8" p="5">
              <HStack space={2}>
                <Text>Informasi</Text>
                <ChevronRightIcon size="5" pl="142%" />
              </HStack>
            </Pressable>
          </Box>
          <Pressable onPress={handleLogOut} mt="25%" ml="10%" mr="10%" backgroundColor="#F5F5F5" rounded="8" p="5">
            <Center>
              <Text>Logout</Text>
            </Center>
          </Pressable>
        </Box>
      </Box>
    </Box>
  )
}

export default Account