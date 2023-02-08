import {
  Box,
  Text,
  ScrollView,
  Image,
  HStack,
  VStack,
  Pressable,
  FlatList,
  Center,
  Spinner,
} from "native-base";
import { Separator } from "../component";
import React, { useState, useEffect, useCallback } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { Linking, RefreshControl } from "react-native";

const RenderItem = ({ item }) => {
  return (
    <Box
      flex={1}
      backgroundColor="#EBEBEB"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ScrollView>
        <Box
          backgroundColor={"white"}
          W={"80%"}
          minH={"100px"}
          borderRadius={"10px"}
          justifyContent={"center"}
          pl={"10px"}
        >
          <HStack alignItems={"center"}>
            <Image
              borderRadius={"10px"}
              source={{ uri: item.Image }}
              alt={"psikolog"}
              w={"80px"}
              h={"80px"}
              resizeMode={"contain"}
            />
            <VStack pl={"10px"} maxW={"280px"} minW={"280px"}>
              <Text fontFamily={"Poppins_500Medium"} color={"#2F8189"}>
                {item.Nama}
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
                  Linking.openURL(item.Link);
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
        <Separator height={"15px"} />
      </ScrollView>
    </Box>
  );
};

const Psikolog = () => {
  useEffect(() => {
    fetchContent();
  }, []);

  const [data, setData] = useState([]);
  const [isContentLoading, setisContentLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchContent = () => {
    fetch(`https://rfadillah.github.io/psikolog/psikolog.json`)
      .then((response) => response.json())
      // .then((json) => console.log(json.Data))
      .then((json) => setData(json.Data))
      .catch((error) => console.error(error))
      .finally(() => {
        setisContentLoading(false);
      });
  };

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchContent();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }, []);

  return fontsLoaded ? (
    <>
      {isContentLoading ? (
        <Center flex={1} bg={"#EBEBEB"}>
          <Spinner size="lg" color="ff7800" />
        </Center>
      ) : (
        <FlatList
          // bg={"#CEDEE5"}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          // onRefresh={onRefresh}
          // refreshing={isRefreshing}
        />
      )}
    </>
  ) : (
    <AppLoading />
  );
};

export default Psikolog;
