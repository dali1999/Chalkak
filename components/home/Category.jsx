import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./category.style";

export default function Category() {
  const DATA = [
    {
      title: "졸업",
      icon: "school-outline",
    },
    {
      title: "프로필",
      icon: "ios-person-outline",
    },
    {
      title: "웨딩",
      icon: "heart-outline",
    },
    {
      title: "우정",
      icon: "people-outline",
    },
    {
      title: "데이트",
      icon: "ios-bonfire-outline",
    },
    {
      title: "여행",
      icon: "airplane-outline",
    },
    {
      title: "가족",
      icon: "people-outline",
    },
    {
      title: "아기",
      icon: "ios-person-outline",
    },
    {
      title: "동물",
      icon: "logo-octocat",
    },
    {
      title: "졸업",
      icon: "school-outline",
    },
    {
      title: "여권",
      icon: "earth-outline",
    },
    {
      title: "컨셉",
      icon: "color-wand-outline",
      // onPress: console.log(title),
    },
  ];
  // const onPress = () => {};

  const Item = ({ icon, title }) => (
    <TouchableOpacity
      style={styles.category}
      onPress={() => console.log(title)}
    >
      <Ionicons name={icon} size={SIZES.large} />
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoryWrapper}>
      <ScrollView
        horizontal={true}
        contentContainerstyle={{
          justifyContent: "space-between",
        }}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} icon={item.icon} />
          )}
          keyExtractor={(item, index) => index}
          numColumns={4}
        />
      </ScrollView>
    </View>
  );
}
