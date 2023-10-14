import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./boardScreen.style";

export default function BoardScreen({ route }) {
  // route 추가
  const navigation = useNavigation();

  const boardId = route.params.boardId; // boardId 가져오기

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: 서버에서 boardId에 해당하는 게시글 목록을 불러옴
    // 예시로 임시 데이터 사용
    setPosts([
      { id: 1, title: `게시글 제목1 - ${boardId}` }, // boardId를 포함하여 임시 데이터 생성
      { id: 2, title: "게시글 제목2" },
    ]);
  }, [boardId]);

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
