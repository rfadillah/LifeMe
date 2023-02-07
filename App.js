import React from "react";
import {
  Login,
  Register,
  Home,
  Jurnal,
  Finance,
  Other,
  Account,
  Landing,
  AddFinance,
  AddCost,
  Psikolog,
  History,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const TabList = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn == "Jurnal") {
            iconName = focused ? "book" : "book-outline";
          } else if (rn == "Finance") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (rn == "Other") {
            iconName = focused ? "list" : "list-outline";
          } else if (rn == "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
        tabBarStyle: {
          height: 70,
          padding: 10,
          backgroundColor: "#6AC3CB",
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#466F73",
        labelStyle: { paddingBottom: 10, fontSize: 13, fontWeight: "reguler" },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{ headerTitleAlign: "center", headerShown: false }}
      />
      <Tab.Screen
        name={"Jurnal"}
        component={Jurnal}
        options={{ headerTitleAlign: "center" }}
      />
      <Tab.Screen
        name={"Finance"}
        component={Finance}
        options={{ headerTitleAlign: "center" }}
      />
      {/* <Tab.Screen name={'Other'} component={Other} options={{ headerTitleAlign: 'center'}}/> */}
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{ headerTitleAlign: "center" }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });
  return fontsLoaded ? (
    <NativeBaseProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3B939B",
              // elevation: 0,
              // shadowOpacity: 0,
            },
            headerTintColor: "#ffffff",
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 18,
              // fontWeight: "",
              fontFamily: "Poppins_500Medium",
            },
          }}
        >
          <Stack.Screen
            name={"Landing"}
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"Login"}
            component={Login}
            options={{ title: "Sign in" }}
          />
          <Stack.Screen
            name={"Register"}
            component={Register}
            options={{ title: "Sign up" }}
          />
          <Stack.Screen
            name={"HomeStack"}
            component={TabList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"AddFinance"}
            component={AddFinance}
            options={{
              title: "Tambah pemasukan",
              headerStyle: { backgroundColor: "#ffffff" },
              headerTintColor: "#2F8189",
            }}
          />
          <Stack.Screen
            name={"AddCost"}
            component={AddCost}
            options={{
              title: "Tambah pengeluaran",
              headerStyle: { backgroundColor: "#ffffff" },
              headerTintColor: "#2F8189",
            }}
          />
          <Stack.Screen
            name={"Psikolog"}
            component={Psikolog}
            options={{
              title: "Data psikolog",
              headerStyle: { backgroundColor: "#EBEBEB" },
              headerTintColor: "#2F8189",
            }}
          />
          <Stack.Screen
            name={"History"}
            component={History}
            options={{
              title: "Riwayat finansial",
              headerStyle: { backgroundColor: "#EBEBEB" },
              headerTintColor: "#2F8189",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
