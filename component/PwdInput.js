import React,{ Component } from "react";
import { Box, Text, Input, Pressable, Icon } from "native-base";
import Separator from "./Separator";
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { MaterialIcons } from "@expo/vector-icons";

class PwdInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            show : false
        };
    }
    render(){
        const {show} = this.state
        return(
            <Box maxW={"88%"}>
                <Text fontFamily={"Poppins_400Regular"} fontSize="14px" color={"#FFFFFF"} opacity="0.6">{this.props.label}</Text>
                <Separator height={"7px"}/>
                <Input size="lg" placeholder={this.props.placeholder} backgroundColor={"white"} borderRadius={"xl"} placeholderTextColor="#C4C4C4" onChangeText={this.props.oct} value={this.value}
                    type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => this.setState({show: !show})}><Icon mr={5} size={5} as={<Ionicons name={show?"eye-outline":"eye-off-outline"}/>}/></Pressable>}
                />
            </Box>
        )
    }
};

export default PwdInput;
