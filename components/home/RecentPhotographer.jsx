import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";
import styles from "./recentPhotographer.style";
import RecentPhotographerView from "../Photographer/RecentPhotographerView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../../hook/useFetch";

export default function RecentPhotographer() {
  const [userData, setUserData] = useState(null);
  const { data, isLoading, error } = useFetch();
  const [shuffledData, setShuffledData] = useState([]);
  const [userCategories, setUserCategories] = useState([]);

  useEffect(() => {
    checkExistingUser();
    if (data && data.length > 0) {
      // Shuffle the data array randomly
      const shuffled = data.slice().sort(() => 0.5 - Math.random());
      setShuffledData(shuffled);

      // Extracting and organizing usernames and categories into an array of objects
      const users = shuffled
        .filter((user) => user.role === "photographer")
        .map((item) => ({
          username: item.username,
          category: item.category,
          role: item.role,
        }));
      setUserCategories(users);
    }
  }, [data]);

  useEffect(() => {
    if (userCategories.length > 0 && userData?.category) {
      const recommended = recommendPhotographers(
        userData.category,
        userCategories
      );
      const filteredPhotographers = recommended.filter(
        (obj) => obj.username !== userData.username
      );

      // If user isn't logged in, show a random photographer
      const listToDisplay =
        filteredPhotographers.length > 0
          ? filteredPhotographers.slice(0, 2)
          : shuffledData.slice(0, 2);

      setShuffledData(listToDisplay);
      console.log("추천작가: ", listToDisplay);
      console.log("\n");
    } else {
      // User isn't logged in, display random photographers
      const shuffled = data.slice().sort(() => 0.5 - Math.random());
      setShuffledData(shuffled.filter((user) => user.role === "photographer"));
    }
  }, [userCategories, userData, data]);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        // setUserLogin(true);
      } else {
        // userData.category = [{}];
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  function recommendPhotographers(userPreferredCategories, photographers) {
    console.log(
      `${userData.username}유저의 선호 프로필 : [${userPreferredCategories}]`
    );
    console.log("\n");
    const recommendedPhotographers = [];
    // Iterate through all photographers
    for (const photographer of photographers) {
      let matchCount = 0;
      // Compare the user's preferred categories with the photographer's categories
      for (const category of userPreferredCategories) {
        if (photographer.category.includes(category)) {
          matchCount++;
        }
      }
      // You can set a threshold (e.g., 1 or more matching categories) for recommendations
      if (matchCount > 0) {
        // Push photographer and the number of matches into recommendedPhotographers array
        recommendedPhotographers.push({ photographer, matchCount });
      }
      console.log(
        `${photographer.username} : [${photographer.category}] ${matchCount}개 일치`
      );
    }
    console.log(`========================================================`);
    // Sort the recommended photographers by the number of matching categories
    recommendedPhotographers.sort((a, b) => b.matchCount - a.matchCount);
    // Return the sorted recommended photographers
    return recommendedPhotographers.map((entry) => entry.photographer);
  }

  return (
    <View style={{ margin: SIZES.medium }}>
      <Text style={styles.title}>추천 작가</Text>
      <View style={styles.recentWrapper}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ) : error ? (
          <Text>
            {console.log(error)}
            {error.message}
          </Text>
        ) : (
          <FlatList
            data={shuffledData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <RecentPhotographerView item={item} />}
            vertical
            contentContainerStyle={{ rowGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
} //
