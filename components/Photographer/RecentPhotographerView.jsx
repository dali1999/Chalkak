import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./recentPhotographerView.style";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

function getRandomImageURL() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Use the random number to create a unique image URL
  return `https://source.unsplash.com/500x500?random=${randomNumber}`;
}

export default function RecentPhotographerView({ item }) {
  const navigation = useNavigation();

  // const handleChatClick = () => {
  //   navigation.navigate("Chat", { photographer: item });
  //   // navigation.navigate("Chat", { photographer: item }); // Pass necessary data
  // };

  return (
    <TouchableOpacity
      style={styles.recentViewWrapper}
      onPress={() => {
        handleChatClick();
      }}
    >
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            source={{ uri: getRandomImageURL() }}
            style={styles.profileImg}
          />
        </View>

        <View style={styles.profileInfoWrapper}>
          <Text>{item.username}</Text>
          <Text>{item.role === "user" ? "유저" : "작가"}</Text>
          <View style={styles.profileInfo}>
            <View style={styles.profileInfoRow}>
              <Ionicons
                name="ios-camera-outline"
                size={15}
                color={COLORS.gray}
              />
              <Text style={{ color: COLORS.primary }}>
                {item.category?.slice(0, 4).join(" | ")}
              </Text>
              {/* {console.log(typeof item.category)} */}
            </View>
            <View style={styles.profileInfoRow}>
              <Ionicons name="location-outline" size={15} color={COLORS.gray} />
              <Text>{item.location}</Text>
            </View>
            <View style={styles.profileInfoRow}>
              <Ionicons name="cash-outline" size={15} color={COLORS.gray} />
              <Text>80,000 ~ 300,000 원</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
