import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./recentPhotographer.style";
import RecentPhotographerView from "../Photographer/RecentPhotographerView";
import useFetch from "../../hook/useFetch";

export default function RecentPhotographer() {
  const { data, isLoading, error } = useFetch();

  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>최근 본 작가</Text>
      <View style={styles.recentWrapper}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>
            {console.log(error)}
            {error.message}
          </Text>
        ) : (
          <RecentPhotographerView item={data} />
        )}
      </View>
    </View>
  );
}
