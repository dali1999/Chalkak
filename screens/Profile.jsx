import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.logo}>마이페이지</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}
