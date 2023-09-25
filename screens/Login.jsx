import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  e,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import styles from "./login.style";

export default function () {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />

      <View style={{ flex: 2 }}>
        <View style={styles.logoArea}>
          <Text style={styles.logo}>찰 칵</Text>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnText(COLORS.offwhite)}>로 그 인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText(COLORS.gray)}>회 원 가 입</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1.3 }} />
    </View>
  );
}
//../assets/갱수댕댕이.png
