import {
  Box,
  Text,
  Input,
  Icon,
  Select,
  CheckIcon,
  HStack,
  Center,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { TextInputUnderlined, Separator, BtnPrimary } from "../component";
import { Pressable, Alert } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { getAuth } from "firebase/auth";
import { db, app } from "../firebase";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

const AddFinance = ({ navigation, route }) => {
  const saldo = parseInt(route.params.saldo);

  function addData() {
    if (jumlah == "" || ket == "") {
      Alert.alert("isi jumlah dan keterangan");
    } else {
      addDoc(collection(db, "Pemasukan"), {
        email: email,
        jumlah: jumlah,
        keterangan: ket,
        tanggal: dateValue,
      })
        .then(() => {
          setDoc(doc(db, "Finance", email), {
            email: email,
            saldo: parseInt(jumlah) + saldo,
          });
          console.log(typeof jumlah);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          navigation.navigate("Finance");
        });
    }
  }

  const auth = getAuth(app);
  let email = auth.currentUser.email;

  const [jumlah, setJumlah] = useState(0);
  const [ket, setKet] = useState("");

  const [isShowDate, setIsShowDate] = useState(false);
  // const [isShowTime, setIsShowTime] = useState(false);
  const [dateValue, setDateValue] = useState(
    `${new Date().toLocaleDateString("ja-JP-u-ca-japanese")}`
  );
  // const [timeValue, setTimeValue] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);

  const setDate = (event, date, mode) => {
    const { type } = event;

    if (type === "set" || type === "dismissed") {
      setIsShowDate(false);
      //   setIsShowTime(false)
    }

    if (mode === "date") {
      setDateValue(
        `${new Date(date).toLocaleDateString("ja-JP-u-ca-japanese")}`
      );
      //   console.log(dateValue)
    } else if (mode === "time") {
      //   setTimeValue(`${new Date(date).getHours()}:${new Date().getMinutes()}`)
    }
  };

  return (
    <Box flex={1} px="5%" pt={"10px"} backgroundColor="white">
      <Box
        backgroundColor={"white"}
        w="100%"
        h={"250px"}
        borderRadius="20px"
        shadow={"5"}
        px="5%"
        justifyContent={"center"}
        alignItems="center"
      >
        <TextInputUnderlined
          placeholder={"Jumlah uang"}
          icon={"cash"}
          kt={"phone-pad"}
          oct={(text) => setJumlah(text)}
          value={jumlah}
        />
        <Separator height={"10px"} />
        <TextInputUnderlined
          placeholder={"Keterangan"}
          icon={"list"}
          oct={(text) => setKet(text)}
          value={ket}
        />
        <Separator height={"10px"} />
        <Input
          pl={"10px"}
          variant="underlined"
          size={"l"}
          placeholder={"tanggal"}
          value={dateValue}
          InputLeftElement={
            <Pressable onPress={() => setIsShowDate(true)}>
              <Icon
                as={<Ionicons name="calendar" />}
                size={8}
                ml="2"
                color="#3B939B"
              />
            </Pressable>
          }
        />
        {isShowDate && (
          <RNDateTimePicker
            mode="date"
            value={new Date()}
            onChange={(event, date) => setDate(event, date, "date")}
          />
        )}
        <Separator height={"25px"} />
      </Box>
      <Separator height={"50px"} />
      <Center>
        <BtnPrimary
          text={"Tambah"}
          bgc={"#2F8189"}
          tc={"#FFFFFF"}
          o={1}
          onPress={addData}
        />
      </Center>
    </Box>
  );
};

export default AddFinance;
