import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar/AppBar";
import axios from "axios";
import { NRROK_ADDRESS } from "../hook/config";

export default function Search() {
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
    <SafeAreaView>
      <AppBar title={"찰영 신청"} color={COLORS.gray} />

      <View style={styles.searchContainer}>
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
            placeholder="What are you looking for?"
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

      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}></View>
      ) : (
        <Text>123</Text>
      )}
    </SafeAreaView>
  );
}
