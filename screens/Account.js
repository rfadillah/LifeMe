import {
  Box,
  Text,
  Button,
  Pressable,
  Image,
  Center,
  ArrowBackIcon,
  HStack,
  ChevronRightIcon,
  InfoIcon,
  InfoOutlineIcon,
} from "native-base";
import { Alert } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  BtnPrimary,
  Separator,
  TextInput,
  PwdInput,
  FooterAuth,
  TittleComp,
} from "../component";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const Account = ({ navigation }) => {
  const auth = getAuth(app);
  let email = auth.currentUser.email;
  const nameSplit = email.split("@");

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
        console.log(error);
        return;
      });
  };

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  return fontsLoaded ? (
    <Box flex={1} backgroundColor="#3B939B">
      <Box flex={3} backgroundColor="#f5f5f5">
        <Box flex={1} backgroundColor="#3B939B" borderBottomRightRadius="90px">
          <HStack mt={"4%"}>
            <InfoOutlineIcon ml="25%" color="#FFFFFF" />
            <Center>
              <Image
                source={require("../assets/landing_pic.png")}
                alt="landing_pic"
                mt="5%"
                w="100px"
                h="100px"
              />
              <Text
                fontFamily={"Poppins_500Medium"}
                color="#FFFFFF"
                fontSize="30px"
                Bold
              >
                {nameSplit[0]}
              </Text>
              <Text fontFamily={"Poppins_400Regular"} color="#FFFFFF">
                {email}
              </Text>
              {/* <Text color="#FFFFFF">+62 123456789</Text> */}
            </Center>
          </HStack>
        </Box>
      </Box>
      <Box flex={7} backgroundColor="#F5F5F5" borderTopLeftRadius="90px">
        <Box
          flex={1}
          // backgroundColor="#ebebeb"
          mb="1%"
          borderTopLeftRadius={"90px"}
          px={"45px"}
        >
          <Box
            mt={"30px"}
            backgroundColor={"white"}
            w="100%"
            h={"170px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            <TittleComp judul={"Information"} />
            <Separator height={"7px"} />
            <Text
              fontFamily={"Poppins_400Regular"}
              color={"gray.400"}
              px={"7%"}
              // textAlign={"center"}
            >
              Aplikasi untuk gaya hidup anda! atur keuangan, catat jurnal harian
              serta dapatkan rekomendasi psikolog untuk anda
            </Text>
            {/* <></> */}
          </Box>
          {/* <Separator height={"3px"} /> */}
          <Box
            mt={"20px"}
            backgroundColor={"white"}
            w="100%"
            h={"130px"}
            borderRadius="20px"
            shadow={"5"}
            px="2%"
            justifyContent={"center"}
            alignItems="center"
          >
            <TittleComp judul={"Developer"} />
            <Separator height={"7px"} />
            <Text
              fontFamily={"Poppins_400Regular"}
              color={"gray.400"}
              px={"6%"}
              // textAlign={"center"}
            >
              {/* Rizki Fadilah, M. Mustang H, Deby Febby F, Ika Putri */}
              ["Rizki Fadilah", "M. Mustang H.", "Deby Febby F.", "Ika Putri"]
            </Text>
          </Box>
          <Separator height={"30px"} />
          {/* <Center>
            <Text color="#3B939B" mt={"5%"}>
              Information
            </Text>
          </Center>
          <Box>
            <Text padding={"30px"} textAlign={"center"}>
              LifeMe merupakan aplikasi berbasis mobile tentang kehidupan
              sehari-hari seseorang dari berbagai kalangan usia. Di aplikasi ini
              memfasilitasi seseorang untuk mengurangi kecemasan, menciptakan
              kesadaran, mengatur emosi serta mendorong keterbukaan, dan
              mengatur keuangan. Diharapkan dengan adanya LifeMe ini dapat
              membantu seseorang untuk menjadi pribadi yang lebih baik dalam
              segala hal baik dalam kesehatan mental maupun keuangan.
            </Text>
            <Text ml={"5%"} color="#3B939B">
              Aplikasi dibuat oleh :
            </Text>
            <Text ml={"5%"}>
              Rizki Fadilah{"\n"}
              M. Mustang H.{"\n"}
              Deby Febby F.{"\n"}
              Ika Putri{"\n"}
            </Text>
          </Box> */}
          {/* <Pressable
            onPress={handleLogOut}
            mt="1%"
            ml="10%"
            mr="10%"
            backgroundColor="#F5F5F5"
            rounded="8"
            p="5"
          >
            <Center>
              <Text>Logout</Text>
            </Center>
          </Pressable> */}
          <Pressable onPress={handleLogOut}>
            <Box
              // mt={"20px"}
              backgroundColor={"white"}
              w="100%"
              h={"70px"}
              borderRadius="20px"
              shadow={"5"}
              px="2%"
              justifyContent={"center"}
              alignItems="center"
            >
              <Text
                fontFamily={"Poppins_600SemiBold"}
                color={"red.400"}
                fontSize={17}
              >
                Log out
              </Text>
            </Box>
          </Pressable>
        </Box>
      </Box>
    </Box>
  ) : (
    <AppLoading />
  );
};

export default Account;
