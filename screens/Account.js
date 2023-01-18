import { Box, Text, Pressable } from 'native-base'
import { Alert } from 'react-native';
import React from 'react'
import { getAuth } from "firebase/auth"
import { app } from '../firebase';

const Account = ({navigation}) => {

  const auth = getAuth(app)
  
  const handleLogOut = () => {
    auth
    .signOut()
    .then(()=>{
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
    <Box>
      <Pressable onPress={handleLogOut}>
        <Text>Account</Text>
      </Pressable>
    </Box>
  )
}

export default Account