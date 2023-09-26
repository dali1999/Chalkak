import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS } from "../../constants";
import styles from "./nearPhotographerView.style";

function getRandomImageURL() {
  // Generate a random number between 1 and 1000 (or any desired range)
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Use the random number to create a unique image URL
  // return `https://picsum.photos/500?random=${randomNumber}`;
  return `https://source.unsplash.com/500x500?random=${randomNumber}`;
}

export default function NearPhotographerView({ item }) {
  const randomImageURL = getRandomImageURL();

  return (
    <TouchableOpacity style={styles.nearViewWrapper}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image source={{ uri: randomImageURL }} style={styles.profileImg} />
        </View>
        <Text style={styles.username}>{item.username} </Text>
        <Text style={{ color: COLORS.primary }}> 작가</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}
