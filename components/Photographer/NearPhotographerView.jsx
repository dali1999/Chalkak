import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./nearPhotographerView.style";

export default function NearPhotographerView() {
  return (
    <TouchableOpacity style={styles.nearViewWrapper}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            source={require("../../assets/갱수댕댕이.png")}
            style={styles.profileImg}
          />
        </View>
        <Text>박소연 작가</Text>
      </View>

      <Text>일상 | 반려동물 | 풍경</Text>
    </TouchableOpacity>
  );
}
