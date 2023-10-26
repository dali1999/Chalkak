import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Login, Profile, Search, SignUp, ChatScreen } from "./screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent from "./components/profile/ImagePickerComponent";
import BoardScreen from "./screens/BoardScreen";
import PostWriteScreen from "./screens/PostWriteScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

//Text 적용
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
//TextInput 적용
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const Stack = createNativeStackNavigator();

export default function App() {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UploadImg"
          component={ImagePickerComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BoardScreen"
          component={BoardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostWrite"
          component={PostWriteScreen}
          options={{ headerShown: true, title: "게시글 작성" }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{ headerShown: true, title: "게시글 상세" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
