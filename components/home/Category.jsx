import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./category.style";

export default function Category() {
  const DATA = [
    {
      title: "졸업",
    },
    {
      title: "프로필",
    },
    {
      title: "웨딩",
    },
    {
      title: "우정",
    },
    {
      title: "데이트",
    },
    {
      title: "여행",
    },
    {
      title: "가족",
    },
    {
      title: "아기",
    },
    {
      title: "동물",
    },
    {
      title: "졸업",
    },
    {
      title: "여권",
    },
    {
      title: "컨셉",
    },
  ];
  const Item = ({ title }) => (
    <TouchableOpacity style={styles.category}>
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.categoryWrapper}>
      <ScrollView horizontal={true}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item, index) => index}
          numColumns={4}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
