import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  HStack,
  VStack,
  ScrollView,
  Select,
  CheckIcon,
  Center,
  Pressable,
} from "native-base";
import { getAuth } from "firebase/auth";
import { app, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { Separator } from "../component";
import { Calendar } from "react-native-calendars";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Linking } from "react-native";
// import { async } from "@firebase/util";

const Home = ({ navigation }) => {
  const getCost = async () => {
    const x = [];
    const q = query(collection(db, "Pengeluaran"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const y = parseInt(doc.data().jumlah);
      x.push({
        y,
      });
    });
    const sum = x.map((tot) => tot.y).reduce((a, b) => a + b);
    setCost(sum);
  };

  const getIncome = async () => {
    const x = [];
    const q = query(collection(db, "Pemasukan"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const y = parseInt(doc.data().jumlah);
      x.push({
        y,
      });
    });
    const sum = x.map((tot) => tot.y).reduce((a, b) => a + b);
    setIncome(sum);
  };

  const getData = async () => {
    const docRef = doc(db, "Finance", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSaldo(docSnap.data().saldo);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   getData();
    //   getCost();
    //   getIncome();
    // }, 500);
    getData();
    getCost();
    getIncome();
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  const auth = getAuth(app);

  let email = auth.currentUser.email;
  const nameSplit = email.split("@");
  const [cost, setCost] = React.useState(0);
  const [monthf, setMonthf] = React.useState("");
  const [yearf, setYearf] = React.useState("");
  const [saldo, setSaldo] = React.useState(0);
  const [income, setIncome] = React.useState(0);

  return fontsLoaded ? (
    <Box flex={1}>
      <Box flex={1} backgroundColor="#3B939B" borderBottomRadius={"60px"}>
        <Image
          source={require("../assets/home-header2.png")}
          w="100%"
          resizeMode="contain"
          alt="header"
          position={"absolute"}
        />
        <Box flex={1} pl="3%" justifyContent="center">
          <HStack>
            <Image source={require("../assets/hello.png")} />
            <VStack justifyContent={"center"}>
              <Text
                fontFamily={"Poppins_400Regular"}
                color="white"
                fontSize={"13px"}
              >
                Hello 👋
              </Text>
              <Text
                fontFamily={"Poppins_700Bold"}
                color="white"
                fontSize={"16px"}
              >
                {nameSplit[0]}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
      <Box flex={5} zIndex={1}>
        <ScrollView px="6%">
          <Box
            backgroundColor={"white"}
            w="100%"
            h={"250px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            <HStack w={"100%"} justifyContent={"space-between"} px="8%">
              <Box>
                <HStack justifyContent={"center"} alignItems={"center"}>
                  <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">
                    Rp. {saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  </Text>
                  <Pressable
                    pb={"3px"}
                    onPress={() => {
                      // forceUpdate;
                      getData();
                      getCost();
                      getIncome();
                    }}
                  >
                    <Ionicons
                      name="refresh-circle"
                      size={30}
                      color={"#000000"}
                    ></Ionicons>
                  </Pressable>
                </HStack>
              </Box>
              <Pressable onPress={() => navigation.navigate("Finance")}>
                <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>
                  See all
                </Text>
              </Pressable>
            </HStack>
            <Separator height={"3%"} />
            <Box
              h="1.5px"
              w="90%"
              backgroundColor="#000000"
              opacity={0.1}
            ></Box>
            <Separator height={"6%"} />
            <HStack justifyContent={"space-between"}>
              <Select
                selectedValue={yearf}
                minWidth="40%"
                maxH={"40px"}
                accessibilityLabel="Pilih Tahun"
                placeholder="Pilih Tahun"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setYearf(itemValue)}
              >
                <Select.Item label="2022" value="2022" />
                <Select.Item label="2023" value="2023" />
              </Select>
              <Select
                selectedValue={monthf}
                minWidth="40%"
                maxH={"40px"}
                accessibilityLabel="Pilih Bulan"
                placeholder="Pilih Bulan"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setMonthf(itemValue)}
              >
                <Select.Item label="Januari" value="Januari" />
                <Select.Item label="Februari" value="Februari" />
              </Select>
            </HStack>
            <HStack>
              <Box w="42%" h="100px" justifyContent={"center"}>
                <Center>
                  <Text fontFamily={"Poppins_400Regular"} fontSize="14px">
                    Pemasukan
                  </Text>
                  <Text
                    fontFamily={"Poppins_700Bold"}
                    fontSize="18px"
                    color="#2F8189"
                  >
                    Rp.
                    {income
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  </Text>
                </Center>
              </Box>
              <Box w="42%" h="100px" justifyContent={"center"}>
                <Center>
                  <Text fontFamily={"Poppins_400Regular"} fontSize="14px">
                    Pengeluaran
                  </Text>
                  <Text
                    fontFamily={"Poppins_700Bold"}
                    fontSize="18px"
                    color="red.400"
                  >
                    Rp. {cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  </Text>
                </Center>
              </Box>
            </HStack>
          </Box>
          <Separator height={"17px"} />
          <Box
            backgroundColor={"white"}
            w="100%"
            h={"250px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            <HStack w={"100%"} justifyContent={"space-between"} px="8%">
              <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">
                Jurnal harian
              </Text>
              <Pressable onPress={() => navigation.navigate("Jurnal")}>
                <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>
                  See all
                </Text>
              </Pressable>
            </HStack>
            <Separator height={"3%"} />
            <Box
              h="1.5px"
              w="90%"
              backgroundColor="#000000"
              opacity={0.1}
            ></Box>
            <Separator height={"10px"} />
            <Image
              // borderRadius={"10px"}
              source={{
                uri: "https://i.ibb.co/88nwyZ9/Blogging-amico.png",
              }}
              alt={"jurnal"}
              w={"150px"}
              h={"150"}
              resizeMode={"contain"}
            />
            {/* <Calendar
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 350,
                width: 350,
              }}
            /> */}
          </Box>
          <Separator height={"17px"} />
          <Box
            backgroundColor={"white"}
            w="100%"
            h={"250px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            <HStack w={"100%"} justifyContent={"space-between"} px="8%">
              <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">
                Cari psikolog
              </Text>
              <Pressable onPress={() => navigation.navigate("Psikolog")}>
                <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>
                  See all
                </Text>
              </Pressable>
            </HStack>
            <Separator height={"3%"} />
            <Box
              h="1.5px"
              w="90%"
              backgroundColor="#000000"
              opacity={0.1}
            ></Box>
            <Separator height={"20px"} />
            {/* ambil beberapa psikolog */}
            <Box
              backgroundColor="#EBEBEB"
              w={"80%"}
              borderRadius={"10px"}
              h={"100px"}
              justifyContent={"center"}
              pl={"10px"}
            >
              {/* psikolog 1 */}
              <HStack alignItems={"center"}>
                <Image
                  borderRadius={"10px"}
                  source={{
                    uri: "https://application.bicarakan.id/_next/image?url=https%3A%2F%2Fbicarakan-prod-bucket.s3.amazonaws.com%2Fmedia%2Fuploads%2Fcounselors%2Fpsikolog-gracia-ivonika-dari-bicarakan-id.jpg&w=3840&q=75",
                  }}
                  alt={"psikolog"}
                  w={"80px"}
                  h={"80px"}
                  resizeMode={"contain"}
                />
                <VStack pl={"10px"} maxW={"200px"} minW={"200px"}>
                  <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>
                    Gracia Ivonika, M. Psi., Psikolog
                  </Text>
                  <Separator height={"4px"} />
                  <Pressable
                    w={"100px"}
                    h={"30px"}
                    backgroundColor={"#2F8189"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"3px"}
                    onPress={() => {
                      Linking.openURL(
                        "https://application.bicarakan.id/counselor/230aaee5-5a63-416a-834d-335b4afa4398"
                      );
                    }}
                  >
                    <Text
                      color={"white"}
                      fontFamily="Poppins_400Regular"
                      fontSize={"11px"}
                    >
                      Hubungi
                    </Text>
                  </Pressable>
                </VStack>
              </HStack>
            </Box>
          </Box>
          <Separator height={"17px"} />
        </ScrollView>
      </Box>
    </Box>
  ) : (
    <AppLoading />
  );
};

export default Home;
