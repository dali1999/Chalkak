import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "../../components/profile/imagePickerComponent.style";
import axios from "axios";
import { NRROK_ADDRESS } from "../../hook/config";
import { COLORS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function ImagePickerComponent({ userId }) {
  const [imageUrl, setImageUrl] = useState([]);
  const [userImages, setUserImages] = useState([]);

  const fetchUserImage = async (userId) => {
    try {
      const response = await fetch(`${NRROK_ADDRESS}/api/images/${userId}`);
      const data = await response.json();
      // console.log(data);
      setUserImages(data);
    } catch (error) {
      console.error("Error fetching user images:", error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      console.log("이미지 아이디", userId);
      fetchUserImage(userId);
    }, [userId])
  );
  useEffect(() => {
    // loadImagesFromStorage();
    console.log("이미지 아이디", userId);
    if (userId) {
      fetchUserImage(userId);
    }
  }, [userId]);

  const loadImagesFromStorage = async () => {
    try {
      const userImages = await AsyncStorage.getItem("userImages");
      if (userImages !== null) {
        setImageUrl(JSON.parse(userImages));
      }
    } catch (error) {
      console.error("Error loading images from storage:", error);
    }
  };

  const saveImagesToStorage = async (newImages) => {
    try {
      await AsyncStorage.setItem("userImages", JSON.stringify(newImages));
    } catch (error) {
      console.error("Error saving images to storage:", error);
    }
  };

  //이미지 삭제
  const deleteImage = async (imageUri) => {
    try {
      // 이미지 삭제 요청을 서버에 전송
      const response = await axios.delete(
        `${NRROK_ADDRESS}/api/images/delete`,
        {
          data: { imageUri },
        }
      );

      if (response.status === 200) {
        // 이미지 삭제 성공 시 이미지 목록을 업데이트
        const updatedImages = imageUrl.filter(
          (image) => image.uri !== imageUri
        );
        setImageUrl(updatedImages);
        saveImagesToStorage(updatedImages);
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // 권한 요청을 위한 hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const uploadImage = async () => {
    //권한 확인: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    //이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, //유형: 사진
      allowsEditing: true, //편집여부
      quality: 0.5, //1이 가장 높은 품질
      aspect: [4, 4], //이미지 비율 설정
    });
    const upload = async (uri) => {
      const endpoint = `${NRROK_ADDRESS}/api/images/upload/${userId}`;
      // console.log(endpoint + "upload");
      try {
        const formData = new FormData();
        formData.append("image", {
          uri,
          name: "image.jpg",
          type: "image/jpeg",
        });
        formData.append("userId", userId);

        const response = await axios.post(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // 서버 응답을 확인하고 처리
        console.log("Upload response:", response.data);
      } catch (error) {
        console.error("Upload error:", error);
      }
    };
    if (!result.canceled) {
      //이미지 업로드 결과 및 이미지 경로 업데이트
      const newImages = [
        { uri: result.assets[0].uri, user: userId },
        ...imageUrl,
      ];

      setImageUrl(newImages);
      saveImagesToStorage(newImages);
      upload(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={uploadImage} style={styles.uploadBtn}>
        <AntDesign name="plussquareo" size={30} color={COLORS.black} />
        <Text style={styles.uploadBtnText}> 업로드</Text>
      </TouchableOpacity>
      <View style={styles.imagesWrapper}>
        <FlatList
          data={userImages}
          numColumns={3} // 3열 그리드
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deleteImage(item.uri)}>
              <Image
                source={{ uri: `${NRROK_ADDRESS}/img/${item.name}` }}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
