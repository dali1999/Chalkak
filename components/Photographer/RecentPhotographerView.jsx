import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./recentPhotographerView.style";
import { COLORS } from "../../constants";

function getRandomImageURL() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Use the random number to create a unique image URL
  return `https://source.unsplash.com/500x500?random=${randomNumber}`;
}

export default function NearPhotographerView({ data }) {
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    // Randomly select one item from the data array
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedRandomItem = data[randomIndex];
    setRandomItem(selectedRandomItem);
  }, [data]);

  if (!randomItem) {
    // If no random item is selected yet, render nothing
    return null;
  }

  return (
    <TouchableOpacity style={styles.recentViewWrapper}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            source={{ uri: getRandomImageURL() }}
            style={styles.profileImg}
          />
        </View>

        <View style={styles.profileInfoWrapper}>
          <Text>{randomItem.username}</Text>
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
              <Text>{randomItem.location}</Text>
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
