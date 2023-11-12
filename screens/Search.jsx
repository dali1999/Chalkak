import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar/AppBar";
import axios from "axios";
import { NRROK_ADDRESS } from "../hook/config";
import RecentPhotographerView from "../components/Photographer/RecentPhotographerView";
import useFetch from "../hook/useFetch";

export default function Search() {
  const { data, isLoading, error } = useFetch();

  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${NRROK_ADDRESS}/api/users/search/${searchKey}`
      );
      setSearchResults(response.data);
      console.log(searchKey);
    } catch (error) {
      console.log("Failed to get users", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBar title={"찰영 신청"} color={COLORS.gray} />

      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="작가 이름, 카테고리(가족, 프로필, 졸업), 장소 등으로 검색하세요."
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length === 0 || "" ? (
        <View style={{ flex: 1, marginBottom: 60 }}>
          <FlatList
            nestedScrollEnabled
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              if (item.role === "photographer")
                return <RecentPhotographerView item={item} />;
            }}
            contentContainerStyle={{
              marginHorizontal: 12,
              rowGap: SIZES.medium,
            }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, marginBottom: 60 }}>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              if (item.role === "photographer")
                return <RecentPhotographerView item={item} />;
            }}
            contentContainerStyle={{
              marginHorizontal: 12,
              rowGap: SIZES.medium,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
