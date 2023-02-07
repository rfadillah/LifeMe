import React, { Component } from 'react'
import { Input, Text, Icon } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

export class TextInputUnderlined extends Component {
  render() {
    return (
      <>
        <Input pl={"10px"} variant="underlined" size={"l"} placeholder={this.props.placeholder} InputLeftElement={<Icon as={<Ionicons name={this.props.icon} />} size={8} ml="2" color="#3B939B" />} keyboardType={this.props.kt} onChangeText={this.props.oct} value={this.value}/>
      </>
    )
  }
}

export default TextInputUnderlined
