import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./recentPhotographerView.style";
import { COLORS } from "../../constants";

export default function NearPhotographerView() {
  return (
    <TouchableOpacity style={styles.recentViewWrapper}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            source={require("../../assets/갱수댕댕이.png")}
            style={styles.profileImg}
          />
        </View>

        <View style={styles.profileInfoWrapper}>
          <Text>김정현 작가</Text>
          <View style={styles.profileInfo}>
            <View style={styles.profileInfoRow}>
              <Ionicons
                name="ios-camera-outline"
                size={15}
                color={COLORS.gray}
              />
              <Text style={{ color: COLORS.primary }}>
                일상 | 반려동물 | 풍경
              </Text>
            </View>
            <View style={styles.profileInfoRow}>
              <Ionicons name="location-outline" size={15} color={COLORS.gray} />
              <Text>경기도 일산서구 외 21곳</Text>
            </View>
            <View style={styles.profileInfoRow}>
              <Ionicons name="cash-outline" size={15} color={COLORS.gray} />
              <Text>80,000 ~ 300,000 원</Text>
            </View>
          </View>
        </View>

        {/* <Image
          source={require("../../assets/fn1.jpg")}
          style={styles.profileRightImg}
        /> */}
      </View>
    </TouchableOpacity>
  );
}
