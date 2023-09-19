import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./nearPhotographer.style";

export default function NearPhotographer() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>내 주변 작가</Text>
      <View style={styles.nearWrapper}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
    </SafeAreaView>
  );
}
