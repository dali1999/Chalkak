import React from "react";
import { View, Text, Button } from "react-native";

// 게시글을 제출하는 함수
const submitPost = async (postData) => {
  try {
    const response = await fetch(
      "https://d633-175-117-199-226.ngrok-free.app/api/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    if (!response.ok) throw new Error("Network response was not ok.");
    // 게시글 목록을 새로고침. fetchPosts() 함수가 새로고침을 담당.
    fetchPosts();
  } catch (error) {
    console.error("Error:", error);
  }
};
function PostDetailScreen({ route }) {
  const { postTitle, postContent } = route.params;

  return (
    <View>
      <Text>{postTitle}</Text>
      <Text>{postContent}</Text>
      <Button title="좋아요" onPress={() => {}} />
      {/* 댓글 구현 부분 */}
    </View>
  );
}

export default PostDetailScreen;
