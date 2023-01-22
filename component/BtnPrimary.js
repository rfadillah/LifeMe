import React, { Component } from 'react'
import { Box, Text, Pressable } from 'native-base'

export class BtnPrimary extends Component {
  render() {
    return (
        <Pressable onPress={this.props.onPress} opacity={this.props.o} w="60%" backgroundColor={this.props.bgc} borderRadius="20px" h="40px" justifyContent="center" shadow={"5"}>
            <Text textAlign="center" fontFamily="Poppins_500Medium" fontSize="16px" color={this.props.tc}>{this.props.text}</Text> 
        </Pressable>
    )
  }
}

export default BtnPrimary;
