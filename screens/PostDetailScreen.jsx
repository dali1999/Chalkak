import React from "react";
import { View, Text, Button } from "react-native";

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
