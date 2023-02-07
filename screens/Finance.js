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
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth } from "firebase/auth";
import { db, app } from "../firebase";
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
import { Separator, TittleComp, BtnPrimary } from "../component";
import { PieChart } from "react-native-chart-kit";

const Finance = ({ navigation }) => {
  const getCostByMonth = async () => {
    // getIncomeByMonth();
    const x = [];
    const q = query(collection(db, "Pengeluaran"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const month = doc.data().tanggal.substring(0, 2);
      const year = doc.data().tanggal.substring(6, 8);
      console.log();
      x.push({
        jumlah: parseInt(doc.data().jumlah),
        month: month,
        year: year,
        key: doc.id,
      });
    });
    const t = x.filter((items) => items.month == monthf);
    const y = t.filter((items) => items.year == yearf);
    // console.log(t);
    const sum = 0;
    sum = y.map((tot) => tot.jumlah).reduce((a, b) => a + b);
    console.log(sum);
    setCost1(sum);
  };

  const getIncomeByMonth = async () => {
    const x = [];
    const q = query(collection(db, "Pemasukan"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const month = doc.data().tanggal.substring(0, 2);
      const year = doc.data().tanggal.substring(6, 8);
      x.push({
        jumlah: parseInt(doc.data().jumlah),
        month: month,
        year: year,
        key: doc.id,
      });
    });
    const t = x.filter((items) => items.month == monthf);
    const y = t.filter((items) => items.year == yearf);
    // console.log(t);
    const sum = y.map((tot) => tot.jumlah).reduce((a, b) => a + b);
    console.log(sum);
    setIncome1(sum);
  };

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

  const auth = getAuth(app);
  let email = auth.currentUser.email;

  const getData = async () => {
    // ambil data use query
    // const q = query(collection(db, "Finance"), where("email", "==", email));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   setSaldo(doc.data().saldo)
    // });

    const docRef = doc(db, "Finance", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSaldo(docSnap.data().saldo);
    } else {
      console.log("No such document!");
      console.log(email);
    }
  };

  useEffect(() => {
    getData();
    getCostByMonth();
    getIncomeByMonth();
  }, []);

  const data = [
    {
      name: "Primer",
      population: 100,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Sekunder",
      population: 200,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Tersier",
      population: 150,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  const [monthf, setMonthf] = useState("02");
  const [yearf, setYearf] = useState("23");
  const [saldo, setSaldo] = useState(0);
  const [cost, setCost] = React.useState(0);
  const [income, setIncome] = React.useState(0);
  const [cost1, setCost1] = React.useState(0);
  const [income1, setIncome1] = React.useState(0);

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
        <Box flex={1} px="9%" justifyContent="center">
          <HStack justifyContent={"space-between"}>
            <VStack justifyContent={"center"}>
              <Text
                fontFamily={"Poppins_700Bold"}
                color="white"
                fontSize={"22px"}
              >
                Rp. {saldo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              </Text>
              <Text
                fontFamily={"Poppins_400Regular"}
                color="white"
                fontSize={"13px"}
                mr={"3px"}
              >
                Saldo anda
              </Text>
            </VStack>
            <HStack>
              <Pressable
                pb={"3px"}
                onPress={() => {
                  getData();
                  getCost();
                  getIncome();
                }}
                backgroundColor="white"
                w={"75px"}
                h={"30px"}
                borderRadius={"5px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily={"Poppins_400Regular"}
                  color="#2F8189"
                  fontSize={"13px"}
                  mr={"3px"}
                >
                  refresh
                </Text>
              </Pressable>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <Box flex={5} zIndex={1}>
        <ScrollView px="6%">
          <Box
            backgroundColor={"white"}
            w="100%"
            h={"150px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            {/* tempat menu */}
            {/* <Box w={"100%"} justifyContent={"space-between"} px="8%">
              <Text fontFamily={"Poppins_600SemiBold"} fontSize="18px">
                Menu
              </Text>
            </Box>
            <Separator height={"3%"} />
            <Box
              h="1.5px"
              w="90%"
              backgroundColor="#000000"
              opacity={0.1}
            ></Box> */}
            <TittleComp judul={"Menu"} />
            <Separator height={"20px"} />
            <HStack justifyContent={"space-between"}>
              <Pressable
                onPress={() =>
                  navigation.navigate("AddFinance", { saldo: saldo })
                }
                mr={"10px"}
              >
                <VStack alignItems={"center"}>
                  <Ionicons name="wallet" size={35} color="#2F8189"></Ionicons>
                  <Text
                    fontFamily={"Poppins_400Regular"}
                    color="#2F8189"
                    fontSize={"13px"}
                    mr={"3px"}
                  >
                    Pemasukan
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("AddCost", { saldo: saldo })}
                mr={"10px"}
              >
                <VStack alignItems={"center"}>
                  <Ionicons name="cart" size={35} color="#2F8189"></Ionicons>
                  <Text
                    fontFamily={"Poppins_400Regular"}
                    color="#2F8189"
                    fontSize={"13px"}
                    mr={"3px"}
                  >
                    Pengeluaran
                  </Text>
                </VStack>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("History", { saldo: saldo })}
                mr={"10px"}
              >
                <VStack alignItems={"center"}>
                  <Ionicons
                    name="list-circle"
                    size={35}
                    color="#2F8189"
                  ></Ionicons>
                  <Text
                    fontFamily={"Poppins_400Regular"}
                    color="#2F8189"
                    fontSize={"13px"}
                    mr={"3px"}
                  >
                    Riwayat
                  </Text>
                </VStack>
              </Pressable>
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
              {/* <HStack justifyContent={"center"} alignItems={"center"}> */}
              <Text
                fontFamily={"Poppins_600SemiBold"}
                fontSize="18px"
                mr={"3px"}
              >
                Laporan Bulanan
              </Text>
            </HStack>
            <Separator height={"3%"} />
            <Box
              h="1.5px"
              w="90%"
              backgroundColor="#000000"
              opacity={0.1}
            ></Box>
            <Separator height={"6%"} />
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <Select
                defaultValue="23"
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
                <Select.Item label="2023" value="23" />
              </Select>
              <Select
                defaultValue="02"
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
                onValueChange={(itemValue) => {
                  setMonthf(itemValue);
                  // getCostByMonth(monthf);
                }}
              >
                <Select.Item label="Januari" value="01" />
                <Select.Item label="Februari" value="02" />
                <Select.Item label="Maret" value="03" />
                <Select.Item label="April" value="04" />
                <Select.Item label="Mei" value="05" />
                <Select.Item label="Juni" value="06" />
                <Select.Item label="Juli" value="07" />
                <Select.Item label="Agustus" value="08" />
                <Select.Item label="September" value="09" />
                <Select.Item label="Oktober" value="10" />
                <Select.Item label="November" value="11" />
                <Select.Item label="Desember" value="12" />
              </Select>
              {/* tempat button */}
              <Pressable
                ml={"5px"}
                mt={"4px"}
                backgroundColor={"#2F8189"}
                minW={"35px"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"40px"}
                borderRadius={"3px"}
                onPress={() => {
                  getCostByMonth();
                  getIncomeByMonth();
                }}
              >
                <Ionicons name="search" size={20} color={"#ffffff"}></Ionicons>
              </Pressable>
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
                    Rp.{" "}
                    {income1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
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
                    Rp. {cost1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
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
            pt={"5%"}
          >
            <PieChart
              data={data}
              width={320}
              height={200}
              chartConfig={{
                backgroundGradientFrom: "#1E2923",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#08130D",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false, // optional
              }}
              accessor={"population"}
              backgroundColor={"transparent"}
              // paddingLeft={"15"}
              center={[2, 6]}
              absolute
            />
          </Box>
          <Separator height={"17px"} />
        </ScrollView>
      </Box>
    </Box>
  ) : (
    <AppLoading />
  );
};

export default Finance;
