import { Box, HStack, Text, Center, FlatList, Spinner } from "native-base";
import React, { useState, useEffect } from "react";
import { Separator, TittleComp } from "../component";
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
import { async } from "@firebase/util";

const RenderItem = ({ item }) => {
  return (
    <Box flex={1} w={"330px"}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Text fontFamily={"Poppins_400Regular"}>{item.keterangan}</Text>
        <Text fontFamily={"Poppins_400Regular"}>{item.jumlah}</Text>
        <Text fontFamily={"Poppins_400Regular"}>{item.tanggal}</Text>
      </HStack>
    </Box>
  );
};

const RenderItem1 = ({ item }) => {
  return (
    <Box flex={1} w={"330px"}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Text fontFamily={"Poppins_400Regular"}>{item.keterangan}</Text>
        <Text fontFamily={"Poppins_400Regular"}>{item.jumlah}</Text>
        <Text fontFamily={"Poppins_400Regular"}>{item.tanggal}</Text>
        <Text fontFamily={"Poppins_400Regular"}>{item.kategori}</Text>
      </HStack>
    </Box>
  );
};

const History = () => {
  const x = [];
  const [income, setIncome] = useState([]);
  const [cost, setCost] = useState([]);
  const [isContentLoading, setisContentLoading] = useState(true);
  const [isContentLoading1, setisContentLoading1] = useState(true);

  const auth = getAuth(app);
  let email = auth.currentUser.email;

  const getPemasukan = async () => {
    const q = query(collection(db, "Pemasukan"), where("email", "==", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      income.push(doc.data());
      // x.push(doc.data());
    });
    setisContentLoading(false);
    // console.log(income);
    // getPengeluaran();
  };

  const getPengeluaran = async () => {
    const q = query(collection(db, "Pengeluaran"), where("email", "==", email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      cost.push(doc.data());
      // x.push(doc.data());
    });
    setisContentLoading1(false);
    console.log(cost);
  };

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  useEffect(() => {
    getPemasukan();
    getPengeluaran();
  }, []);

  return fontsLoaded ? (
    <Box
      flex={1}
      backgroundColor={"#EBEBEB"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box flex={1} alignItems={"center"}>
        <TittleComp judul={"Pemasukan"} />
        <Separator height={"10px"} />
        {isContentLoading ? (
          <Center flex={1} bg={"#EBEBEB"}>
            <Spinner size="lg" color="ff7800" />
          </Center>
        ) : (
          <FlatList
            data={income}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RenderItem item={item} />}
          />
        )}
      </Box>
      <Box flex={1} alignItems={"center"}>
        <TittleComp judul={"Pengeluaran"} />
        <Separator height={"10px"} />
        {isContentLoading1 ? (
          <Center flex={1} bg={"#EBEBEB"}>
            <Spinner size="lg" color="ff7800" />
          </Center>
        ) : (
          <FlatList
            data={cost}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RenderItem1 item={item} />}
          />
        )}
      </Box>
    </Box>
  ) : (
    <AppLoading />
  );
};

export default History;
