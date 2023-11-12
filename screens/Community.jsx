// import React from "react";
// import { View, Text, ScrollView, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import AppBar from "../components/AppBar/AppBar";
// import { useNavigation } from "@react-navigation/native";
// import { COLORS } from "../constants";
// import styles from "./community.style";

// export default function Community() {
//   const navigation = useNavigation();

//   const favoriteBoards = [
//     { id: 1, name: "자유" },
//     { id: 2, name: "정보" },
//     { id: 3, name: "Q&A" },
//     { id: 4, name: "홍보" },
//   ];

//   const popularPosts = [
//     // ... your popular post data
//   ];

//   const allBoards = [
//     { id: 1, name: "서울 촬영 게시판" },
//     { id: 2, name: "SNS촬영 게시판" },
//     // ... other boards
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <AppBar title={"커뮤니티"} color={COLORS.gray} />
//       <ScrollView style={styles.scrollContainer}>
//         <View style={styles.favoriteBoardContainer}>
//           <View style={styles.headerContainer}>
//             {favoriteBoards.map((board) => (
//               <TouchableOpacity
//                 key={board.id}
//                 style={styles.boardButton}
//                 onPress={() =>
//                   navigation.navigate("BoardScreen", { boardId: board.id })
//                 }
//               >
//                 <Text style={styles.boardButtonText}>{board.name}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         <View style={styles.popularPostContainer}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>인기 게시판</Text>
//             <TouchableOpacity style={styles.moreButton}>
//               <Text style={styles.moreButtonText}>More</Text>
//             </TouchableOpacity>
//           </View>
//           {popularPosts.map((post) => (
//             <TouchableOpacity
//               key={post.id}
//               style={styles.postButton}
//               onPress={() =>
//                 navigation.navigate("PostScreen", { postId: post.id })
//               }
//             >
//               <Text style={styles.postButtonText}>{post.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.allBoardContainer}>
//           <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>게시판</Text>
//             <TouchableOpacity style={styles.moreButton}>
//               <Text style={styles.moreButtonText}>More</Text>
//             </TouchableOpacity>
//           </View>
//           {allBoards.map((board) => (
//             <TouchableOpacity
//               key={board.id}
//               style={styles.boardButton}
//               onPress={() =>
//                 navigation.navigate("BoardScreen", { boardId: board.id })
//               }
//             >
//               <Text style={styles.boardButtonText}>{board.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar/AppBar";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { NRROK_ADDRESS } from "../hook/config";
import styles from "./community.style";
import { COLORS } from "../constants";

export default function Community() {
  const navigation = useNavigation();
  const [allBoards, setAllBoards] = useState([]); // 상태 초기화
  const [newBoardName, setNewBoardName] = useState("");
  const [newBoardDescription, setNewBoardDescription] = useState("");
  // 서버로부터 모든 게시판 목록을 가져오는 함수
  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get(`${NRROK_ADDRESS}/api/boards`);
      setAllBoards(response.data);
    } catch (error) {
      console.error(
        "Error fetching boards:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCreateBoard = async () => {
    if (!newBoardName.trim()) {
      Alert.alert("Error", "게시판 이름을 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post(`${NRROK_ADDRESS}/api/boards`, {
        name: newBoardName,
        description: newBoardDescription,
      });
      setNewBoardName("");
      setNewBoardDescription("");
      fetchBoards(); // 새 게시판을 추가한 후 게시판 목록을 다시 불러옵니다.
      Alert.alert("Success", "게시판이 생성되었습니다.");
    } catch (error) {
      console.error(
        "Error creating board:",
        error.response ? error.response.data : error.message
      );
      Alert.alert("Error", "게시판 생성에 실패했습니다.");
    }
  };

  // 인기 게시글 목록과 관련된 상태 및 로직이 필요한 경우 추가

  return (
    <SafeAreaView style={styles.container}>
      <AppBar title={"커뮤니티"} color={COLORS.gray} />
      <ScrollView style={styles.scrollContainer}>
        {/* 여기에 게시판 생성 UI 추가 */}
        <View style={styles.createBoardContainer}>
          <TextInput
            style={styles.input}
            value={newBoardName}
            onChangeText={setNewBoardName}
            placeholder="게시판 이름"
          />
          <TextInput
            style={styles.input}
            value={newBoardDescription}
            onChangeText={setNewBoardDescription}
            placeholder="게시판 설명"
            multiline
          />
          <Button title="게시판 생성" onPress={handleCreateBoard} />
        </View>
        <View style={styles.allBoardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>게시판</Text>
            {/* 게시판 추가 더 보기 버튼 관련 로직이 필요한 경우 추가 */}
          </View>
          {allBoards.map((board) => (
            <TouchableOpacity
              key={board._id} // 실제 ObjectId를 key로 사용
              style={styles.boardButton}
              onPress={
                () => navigation.navigate("BoardScreen", { boardId: board._id }) // 실제 ObjectId를 파라미터로 전달
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
