import React, { Component } from "react";
import { Box, Text } from "native-base";
import { Separator } from "../component";

export class TittleComp extends Component {
  render() {
    return (
      <>
        <Box w={"100%"} justifyContent={"space-between"} px="8%">
          <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">
            {this.props.judul}
          </Text>
        </Box>
        <Separator height={"3%"} />
        <Box h="1.5px" w="90%" backgroundColor="#000000" opacity={0.1}></Box>
      </>
    );
  }
}

export default TittleComp;
