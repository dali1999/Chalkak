import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS } from "../../constants";
import styles from "./nearPhotographerView.style";

function getRandomImageURL() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Use the random number to create a unique image URL
  return `https://source.unsplash.com/500x500?random=${randomNumber}`;
}

export default function NearPhotographerView({ item }) {
  return (
    <TouchableOpacity style={styles.nearViewWrapper}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImgContainer}>
          <Image
            source={{ uri: getRandomImageURL() }}
            style={styles.profileImg}
          />
        </View>
        <Text style={styles.username}>{item.username} </Text>
        <Text style={{ color: COLORS.primary }}>
          {" "}
          {item.role === "user" ? "유저" : "작가"}
        </Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}
