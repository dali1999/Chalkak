import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./appBar.style";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ title, color }) {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Text style={styles.logo(color)}>{title}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
