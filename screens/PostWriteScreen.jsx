import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

function PostWriteScreen({ navigation }) {
  const [post, setPost] = useState("");

  const handleSubmit = () => {
    // 여기서 post를 서버나 AsyncStorage에 저장.
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={post}
        onChangeText={setPost}
        placeholder="게시글 내용을 입력하세요."
        multiline
      />
      <Button title="등록" onPress={handleSubmit} />
    </View>
  );
}

export default PostWriteScreen;
