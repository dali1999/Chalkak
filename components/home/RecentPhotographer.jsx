import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../constants";
import styles from "./recentPhotographer.style";

export default function RecentPhotographer() {
  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>최근 본 작가</Text>
      <View style={styles.recentWrapper}>
        <Text>1</Text>
      </View>
    </View>
  );
}
