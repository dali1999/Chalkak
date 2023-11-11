import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./nearPhotographer.style";
import NearPhotographerView from "../Photographer/NearPhotographerView";
import useFetch from "../../hook/useFetch";

export default function NearPhotographer() {
  const { data, isLoading, error } = useFetch();
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Shuffle the data array randomly
      const shuffled = data.slice().sort(() => 0.5 - Math.random());
      setShuffledData(shuffled);
    }
  }, [data]);

  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>최근 가입 유저</Text>
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
            data={shuffledData.slice(0, 3)}
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
