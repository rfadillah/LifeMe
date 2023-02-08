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
} from "../component";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";

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

  return (
    <Box flex={1} backgroundColor="#3B939B">
      <Box flex={4} backgroundColor="#ffffff">
        <Box flex={1} backgroundColor="#3B939B" borderBottomRightRadius="90px">
          <HStack mt={"10%"}>
            <InfoOutlineIcon ml="30%" color="#FFFFFF" />
            <Center>
              <Image
                source={require("../assets/landing_pic.png")}
                alt="landing_pic"
                mt="5%"
                w="100px"
                h="100px"
              />
              <Text color="#FFFFFF" fontSize="30px" Bold>
                {nameSplit[0]}
              </Text>
              <Text color="#FFFFFF">{email}</Text>
              {/* <Text color="#FFFFFF">+62 123456789</Text> */}
            </Center>
          </HStack>
        </Box>
      </Box>
      <Box flex={7} backgroundColor="#F5F5F5" borderTopLeftRadius="90px">
        <Box
          flex={1}
          backgroundColor="#FFFFFF"
          mb="1%"
          borderTopLeftRadius={"90px"}
        >
          <Center>
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
          </Box>
          <Pressable
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
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
