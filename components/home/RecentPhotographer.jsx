import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./recentPhotographer.style";

export default function RecentPhotographer() {
  return (
    <SafeAreaView>
      <Text style={styles.titles}>최근 본 작가</Text>
    </SafeAreaView>
  );
}
