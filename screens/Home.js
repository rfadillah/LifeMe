import React from 'react'
import { Box, Text, Image, HStack, VStack, ScrollView, Select, CheckIcon, Center, Pressable } from 'native-base'
import { getAuth } from "firebase/auth"
import { app } from '../firebase';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Separator } from '../component';


const Home = ({navigation}) => {
    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_400Regular,
      Poppins_600SemiBold,
      Poppins_500Medium
    });
    
    const auth = getAuth(app)

    let name = auth.currentUser.email
    const nameSplit = name.split("@");

    const [monthf, setMonthf] = React.useState("");
    const [yearf, setYearf] = React.useState("");

    return fontsLoaded ? (
      <Box flex={1}>
        <Box flex={1} backgroundColor="#3B939B" borderBottomRadius={"60px"} >
          <Image source={require("../assets/home-header2.png")} w="100%" resizeMode="contain" alt="header" position={"absolute"}/>
          <Box flex={1} pl="3%" justifyContent="center" >
            <HStack>
              <Image source={require("../assets/hello.png")}/>
              <VStack justifyContent={"center"} >
                <Text fontFamily={"Poppins_400Regular"} color="white" fontSize={"13px"}>Hello 👋</Text>
                <Text fontFamily={"Poppins_700Bold"} color="white" fontSize={"16px"}>{nameSplit[0]}</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>
        <Box flex={5} zIndex={1}>
          <ScrollView  px="6%">
            <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"} px="2%" justifyContent={"center"} alignItems="center">
              <HStack w={"100%"} justifyContent={"space-between"} px="8%">
                <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">Rp. 1.000.000</Text>
                <Pressable onPress={()=> navigation.navigate("Finance")}>
                  <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>See all</Text>
                </Pressable>
              </HStack>
              <Separator height={"3%"}/>
              <Box h="1.5px" w="90%" backgroundColor="#000000" opacity={0.1}></Box>
              <Separator height={"6%"}/>
              <HStack justifyContent={"space-between"}>
                <Select selectedValue={yearf} minWidth="40%" maxH={"40px"} accessibilityLabel="Pilih Tahun" placeholder="Pilih Tahun" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => setYearf(itemValue)}>
                  <Select.Item label="2022" value="2022" />
                  <Select.Item label="2023" value="2023" />
                </Select>
                <Select selectedValue={monthf} minWidth="40%" maxH={"40px"} accessibilityLabel="Pilih Bulan" placeholder="Pilih Bulan" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => setMonthf(itemValue)}>
                  <Select.Item label="Januari" value="Januari" />
                  <Select.Item label="Februari" value="Februari" />
                </Select>
              </HStack>
              <HStack>
                <Box w="42%" h="100px" justifyContent={"center"}>
                  <Center>
                    <Text fontFamily={"Poppins_400Regular"} fontSize="14px">Pemasukan</Text>
                    <Text fontFamily={"Poppins_700Bold"} fontSize="18px" color="#2F8189">Rp. 1.000.000</Text>
                  </Center>
                </Box>
                <Box w="42%" h="100px" justifyContent={"center"}>
                  <Center>
                    <Text fontFamily={"Poppins_400Regular"} fontSize="14px">Pengeluaran</Text>
                    <Text fontFamily={"Poppins_700Bold"} fontSize="18px" color="red.400">Rp.800.000</Text>
                  </Center>
                </Box>
              </HStack>
            </Box>
            <Separator height={"17px"}/>
            <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"}>

            </Box>
            <Separator height={"17px"}/>
            <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"}>

            </Box>
            <Separator height={"17px"}/>
          </ScrollView>
        </Box>
      </Box>
    ) : (
      <AppLoading/>
    )
  }


export default Home
