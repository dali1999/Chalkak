import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar/AppBar";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import styles from "./community.style.";

export default function Community() {
  const navigation = useNavigation();

  const allBoards = [
    { id: 1, name: "test board1" },
    { id: 2, name: "test board2" },
    { id: 3, name: "test board3" },
    // ... other boards
  ];

  const popularPosts = [
    { id: 1, title: "인기글 1" },
    { id: 2, title: "인기글 2" },
    { id: 3, title: "인기글 3" },
    // ... other posts
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title={"커뮤니티"} color={COLORS.gray} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.popularPostContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>인기글</Text>
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
          <Text style={styles.headerText}>전체 게시판</Text>
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
