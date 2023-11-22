import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./galary.style";
import { COLORS, SIZES } from "../constants";
import AppBar from "../components/AppBar/AppBar";
import axios from "axios";
import { NRROK_ADDRESS } from "../hook/config";
import { useFocusEffect } from "@react-navigation/native";
import useFetch from "../hook/useFetch";

export default function Galary() {
  const navigation = useNavigation();
  const { data } = useFetch();

  const [images, setImages] = useState([]);
  // const endpoint = `${NRROK_ADDRESS}/api/images`;

  useFocusEffect(
    React.useCallback(() => {
      // 화면이 focus될 때 실행되는 코드
      fetchImagesFromMongoDB();
    }, [])
  );

  const fetchImagesFromMongoDB = async () => {
    try {
      const response = await axios.get(`${NRROK_ADDRESS}/api/images`);
      if (response.status === 200) {
        // MongoDB에서 가져온 이미지 목록을 상태에 설정
        setImages(response.data);
      }
    } catch (error) {
      console.error("Error fetching images from MongoDB:", error);
    }
  };

  return (
    <SafeAreaView>
      <AppBar title={"갤러리"} color={COLORS.gray} />

      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate("Search")}
      >
        <Ionicons name="search" size={24} color={COLORS.primary} />
        <Text style={styles.searchBarText}>당신의 작가를 찾아보세요</Text>
      </TouchableOpacity>
      <ScrollView style={{ height: "82%" }}>
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.user);
              }}
            >
              <Image
                source={{ uri: `${NRROK_ADDRESS}/img/${item.name}` }}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
