import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import styles from "./profile.style";
import AppBar from "../components/AppBar/AppBar";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <AppBar title={"마이 페이지"} color={COLORS.gray} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>L O G I N</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
