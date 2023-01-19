import React, { Component } from 'react'
import { Box, Image, Pressable } from 'native-base'
import { Alert } from "react-native"

export class FooterAuth extends Component {
  render() {
    return (
        <>
            <Image source={require("../assets/footer.png")} alt="footer" resizeMode='contain' position={"absolute"}/>
            <Box flex={1} justifyContent="center" alignItems={"center"}>
            <Pressable onPress={() => Alert.alert("Sorry, this feature is unavailable")}>
                <Image source={require("../assets/sosmed.png")} alt="sosmed"  W="60%" resizeMode="contain" zIndex={1}/>
            </Pressable>
            </Box>
        </>
    )
  }
}

export default FooterAuth
