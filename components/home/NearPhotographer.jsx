import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./nearPhotographer.style";
import NearPhotographerView from "../Photographer/NearPhotographerView";
import useFetch from "../../hook/useFetch";

export default function NearPhotographer() {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>회원가입 한 유저들</Text>
      <View style={styles.nearWrapper}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>
            {console.log(error)}
            {error.message}
          </Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <NearPhotographerView item={item} />}
            vertical
            contentContainerStyle={{ rowGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
}
