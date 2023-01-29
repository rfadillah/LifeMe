import { Box, Text, Image, HStack, VStack, ScrollView, Select, CheckIcon, Center, Pressable } from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
import { PieChart } from 'react-native-chart-kit'

const Finance = ({navigation}) => {

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_400Regular,
      Poppins_600SemiBold,
      Poppins_500Medium
    });

    const [monthf, setMonthf] = React.useState("");
    const [yearf, setYearf] = React.useState("");

    return fontsLoaded ? (
      <Box flex={1}>
        <Box flex={1} backgroundColor="#3B939B" borderBottomRadius={"60px"} >
          <Image source={require("../assets/home-header2.png")} w="100%" resizeMode="contain" alt="header" position={"absolute"}/>
          <Box flex={1} px="9%" justifyContent="center" >
            <HStack justifyContent={"space-between"}>
              <VStack justifyContent={"center"} >
                <Text fontFamily={"Poppins_700Bold"} color="white" fontSize={"22px"}>Rp. 1.000.000</Text>
                <Text fontFamily={"Poppins_400Regular"} color="white" fontSize={"13px"}>Saldo anda</Text>
              </VStack>
              <HStack>
                <Pressable onPress={() => navigation.navigate("AddFinance")} mr={"7px"}>
                  <Ionicons name='add-circle' size={35} color="white"></Ionicons>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("AddCost")}>
                  <Ionicons name='remove-circle' size={35} color="white"></Ionicons>
                </Pressable>
              </HStack>
            </HStack>
          </Box>
        </Box>
        <Box flex={5} zIndex={1}>
          <ScrollView  px="6%">
            <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"} px="2%" justifyContent={"center"} alignItems="center">
              <HStack w={"100%"} justifyContent={"space-between"} px="8%">
                <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">Laporan Bulanan</Text>
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
              <PieChart
                data={data}
                width={320}
                height={180}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
              />
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

export default Finance