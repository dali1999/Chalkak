import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./profile.style";
import AppBar from "../components/AppBar/AppBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent from "../components/profile/ImagePickerComponent";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [isPhotographer, setIsPhotographer] = useState(false);

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

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([useId, "id"]);
      console.log("Hello");
      navigation.replace("Bottom Navigation");
    } catch (error) {
      console.log("Error loggin out the user:", error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel logout"),
      },
      {
        text: "Continue",
        onPress: () => userLogout(),
      },
    ]);
  };

  return (
    <SafeAreaView>
      <AppBar title={"프로필"} color={COLORS.gray} />

      <View>
        {userLogin === false ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              {/* <AntDesign name="logout" color={COLORS.primary} size={24} /> */}
              <Text style={styles.logText}>로 그 인</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container}>
            {/* 프로필 ================================================ */}
            <View style={styles.profileWrapper}>
              <View style={styles.profileContainer}>
                <TouchableOpacity
                  style={styles.profileImgContainer}
                  onPress={() => {
                    navigation.navigate("UploadImg");
                  }}
                >
                  <Image
                    source={require("../assets/갱수댕댕이.png")}
                    style={styles.profileImg}
                  />
                </TouchableOpacity>

                <View style={styles.profileInfoWrapper}>
                  <Text>{userData.username}</Text>
                  <View style={styles.profileInfo}>
                    <View style={styles.profileInfoRow}>
                      <Ionicons
                        name="ios-camera-outline"
                        size={15}
                        color={COLORS.gray}
                      />
                      <Text style={{ color: COLORS.primary }}>
                        {userData.category?.slice(0, 5).join(" | ")}
                      </Text>
                    </View>
                    <View style={styles.profileInfoRow}>
                      <Ionicons
                        name="location-outline"
                        size={15}
                        color={COLORS.gray}
                      />
                      <Text>{userData.location}</Text>
                    </View>
                    <View style={styles.profileInfoRow}>
                      <Ionicons
                        name="cash-outline"
                        size={15}
                        color={COLORS.gray}
                      />
                      <Text>80,000 ~ 300,000 원</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* 이미지 업로드 ==========================================*/}
            <ImagePickerComponent userId={userData._id} />

            <TouchableOpacity
              style={styles.logout}
              onPress={() => userLogout()}
            >
              {/* <AntDesign name="logout" color={COLORS.offwhite} size={20} /> */}
              <Text style={styles.logText}>로그아웃</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
