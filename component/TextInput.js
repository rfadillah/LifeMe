import React,{ Component } from "react";
import { Box, Text, Input } from "native-base";
import Separator from "./Separator";

class TextInput extends Component{
  render(){
    return(
        <Box maxW={"88%"}>
            <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6">{this.props.label}</Text>
            <Separator height={"7px"}/>
            <Input size="lg" placeholder={this.props.placeholder} backgroundColor={"white"} borderRadius={"xl"} placeholderTextColor="#C4C4C4"/>
        </Box>
    )
  }
};

export default TextInput;
