import React, { Component } from 'react'
import { Box, Text, Image, HStack, VStack, ScrollView } from 'native-base'
import { getAuth } from "firebase/auth"
import { app } from '../firebase';
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
// import { BarChart } from 'react-native-chart-kit'
import AppLoading from 'expo-app-loading';
import { Separator } from '../component';
// import { Dimensions } from 'react-native';

// const minValue = 1000000;

// function* yLabel() {
//   yield* [minValue, 5000000, 10000000];
// }

// const datapoints = [1500000, 1000000, 1500000, 1500000, 1500000, 1500000].map(
//   (datapoint) => datapoint - minValue - 1,
// );

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
//   datasets: [
//     {
//       data: datapoints,
//     },
//   ],
// };

const Home = () => {
    const [fontsLoaded] = useFonts({
      Poppins_700Bold,
      Poppins_400Regular
    });
    const auth = getAuth(app)

    let name = auth.currentUser.email
    const nameSplit = name.split("@");

    // const screenWidth = Dimensions.get('window').width;
    // const yLabelIterator = yLabel();
    

    return fontsLoaded ? (
      <Box flex={1}>
        <Box flex={1} backgroundColor="#3B939B" borderBottomRadius={"60px"} >
          <Image source={require("../assets/home-header2.png")} w="100%" resizeMode="contain" alt="header" position={"absolute"}/>
          <Box flex={1} pl="3%" justifyContent="center" >
            <HStack>
              <Image source={require("../assets/hello.png")}/>
              <VStack justifyContent={"center"}>
                <Text fontFamily={"Poppins_400Regular"} color="white" fontSize={"13px"}>Hello 👋</Text>
                <Text fontFamily={"Poppins_700Bold"} color="white" fontSize={"16px"}>{nameSplit[0]}</Text>
              </VStack>
            </HStack>
          </Box>
        </Box>
        <Box flex={5} zIndex={1}>
          <ScrollView  px="6%">
            <Box backgroundColor={"white"} w="100%" h={"250px"} borderRadius="20px" shadow={"5"} px="2%" justifyContent={"center"} alignItems="center">
              {/* <BarChart
                data={data}
                width={330}
                height={200}
                segments={2}
                fromZero={true}
                yAxisLabel={'Rp.'}
                chartConfig={{
                  backgroundColor: '#FFFFFF',
                  backgroundGradientFrom: '#FFFFFF',
                  backgroundGradientTo: '#FFFFFF',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(59, 147, 155, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  formatYLabel: () => yLabelIterator.next().value,
                }}
                
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              /> */}
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
