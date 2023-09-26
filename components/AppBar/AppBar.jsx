import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./appBar.style";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppBar({ title, color }) {
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

  const navigation = useNavigation();
  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Text style={styles.logo(color)}>{title}</Text>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>
            {userData ? userData.username : "로그인이 필요합니다"}
          </Text>
          <Ionicons
            name="person-circle-outline"
            size={35}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
