import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./boardScreen.style";

export default function BoardScreen({ route }) {
  const navigation = useNavigation();
  const boardId = route.params.boardId; // boardId 가져오기

  const [posts, setPosts] = useState([]);

  // 서버로부터 게시글 데이터를 불러오는 함수
  const fetchPosts = async () => {
    try {
      // boardId를 사용하여 해당 게시판의 게시글만 불러옵니다.
      const response = await fetch(
        `https://d633-175-117-199-226.ngrok-free.app/api/posts?boardId=${boardId}`
      );
      if (!response.ok) {
        /*throw new Error("Network response was not ok.");
      const data = await response.json();
      setPosts(data); // 서버로부터 받은 데이터로 posts 상태를 업데이트합니다.*/
        console.error(
          `HTTP Error Response: ${response.status} ${response.statusText}`
        );
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 컴포넌트가 마운트될 때 게시글 데이터를 불러옵니다.
  }, [boardId]); // boardId가 변경될 때마다 fetchPosts를 호출하여 업데이트합니다.

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() =>
              navigation.navigate("PostScreen", { postId: item.id })
            }
          >
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.writeButton}
        onPress={() => navigation.navigate("PostWrite")}
      >
        <Text style={styles.writeButtonText}>게시글 작성</Text>
      </TouchableOpacity>
    </View>
  );
}
