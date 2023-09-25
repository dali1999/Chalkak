import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../constants";
import styles from "./nearPhotographer.style";
import NearPhotographerView from "../../Photographer/NearPhotographerView";

export default function NearPhotographer() {
  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>내 주변 작가</Text>
      <View style={styles.nearWrapper}>
        <NearPhotographerView />
        <NearPhotographerView />
        <NearPhotographerView />
        <NearPhotographerView />
        <NearPhotographerView />
      </View>
    </View>
  );
}
