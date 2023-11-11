import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar/AppBar";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import styles from "./community.style";

export default function Community() {
  const navigation = useNavigation();

  const favoriteBoards = [
    { id: 1, name: "자유" },
    { id: 2, name: "정보" },
    { id: 3, name: "Q&A" },
    { id: 4, name: "홍보" },
  ];

  const popularPosts = [
    // ... your popular post data
  ];

  const allBoards = [
    { id: 5, name: "서울 촬영 게시판" },
    { id: 6, name: "SNS촬영 게시판" },
    // ... other boards
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title={"커뮤니티"} color={COLORS.gray} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.favoriteBoardContainer}>
          <View style={styles.headerContainer}>
            {favoriteBoards.map((board) => (
              <TouchableOpacity
                key={board.id}
                style={styles.boardButton}
                onPress={() =>
                  navigation.navigate("BoardScreen", { boardId: board.id })
                }
              >
                <Text style={styles.boardButtonText}>{board.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.popularPostContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>인기 게시판</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          </View>
          {popularPosts.map((post) => (
            <TouchableOpacity
              key={post.id}
              style={styles.postButton}
              onPress={() =>
                navigation.navigate("PostScreen", { postId: post.id })
              }
            >
              <Text style={styles.postButtonText}>{post.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.allBoardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>게시판</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
          </View>
          {allBoards.map((board) => (
            <TouchableOpacity
              key={board.id}
              style={styles.boardButton}
              onPress={() =>
                navigation.navigate("BoardScreen", { boardId: board.id })
              }
            >
              <Text style={styles.boardButtonText}>{board.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
