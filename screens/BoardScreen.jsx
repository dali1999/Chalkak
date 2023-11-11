import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./boardScreen.style";
import axios from "axios";
import { NRROK_ADDRESS } from "../hook/config";
import useFetch from "../hook/useFetch";

export default function BoardScreen({ route }) {
  const navigation = useNavigation();
  const boardId = route.params.boardId; // boardId 가져오기

  const [posts, setPosts] = useState([]);

  // 서버로부터 게시글 데이터를 불러오는 함수
  // const fetchPosts = async () => {
  //   try {
  //     // boardId를 사용하여 해당 게시판의 게시글만 불러옴.
  //     // const response = await fetch(
  //     //   `https://d633-175-117-199-226.ngrok-free.app/api/posts?boardId=${boardId}`
  //     // );
  //     const response = await axios.get(`${NRROK_ADDRESS}/api/posts`);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok.");
  //     const data = await response.json();
  //     setPosts(data); // 서버로부터 받은 데이터로 posts 상태를 업데이트.
  //       console.error(
  //         `HTTP Error Response: ${response.status} ${response.statusText}`
  //       );
  //       throw new Error("Network response was not ok.");
  //     }
  //     const data = await response.json();
  //     setPosts(data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const fetchPosts = async () => {
    try {
      // boardId를 사용하여 해당 게시판의 게시글만 불러옵니다.
      const response = await axios.get(
        `${NRROK_ADDRESS}/api/boards/${boardId}/posts`
      );
      // Axios는 response.data에 직접 데이터를 반환하므로 .json() 호출은 필요 없습니다.
      setPosts(response.data); // 서버로부터 받은 데이터로 posts 상태를 업데이트합니다.
    } catch (error) {
      // Axios 에러는 error.response로 접근해야 합니다.
      // error.response에는 서버의 응답 정보가 담겨 있습니다.
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  //에러 확인용
  // const fetchPosts = async () => {
  //   try {
  //     // Axios는 response.data에 직접 데이터를 반환합니다.
  //     const response = await axios.get(
  //       `${NRROK_ADDRESS}/api/posts?boardId=${boardId}`
  //     );
  //     // response.ok 체크를 제거합니다. Axios는 자동으로 에러를 발생시킵니다.
  //     setPosts(response.data); // Axios는 response 객체 안의 data 속성에 JSON 데이터를 담습니다.
  //   } catch (error) {
  //     // Axios 에러에서는 error.response를 확인하여 에러의 상세 내용을 확인할 수 있습니다.
  //     console.error("Error:", error.response || error.message);
  //   }
  // };

  useEffect(() => {
    fetchPosts(); // 컴포넌트가 마운트될 때 게시글 데이터를 불러옴.
  }, [boardId]); // boardId가 변경될 때마다 fetchPosts를 호출하여 업데이트

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
