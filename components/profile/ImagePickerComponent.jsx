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
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import styles from "../../components/profile/imagePickerComponent.style";
import localImage from "../../assets/갱수댕댕이.png";
import axios from "axios";
import { NRROK_ADDRESS } from "../../hook/config";
import { COLORS } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ImagePickerComponent({ url }) {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    // 앱 시작 시 이미지 상태를 로드
    loadImagesFromStorage();
  }, []);

  const loadImagesFromStorage = async () => {
    try {
      const savedImages = await AsyncStorage.getItem("savedImages");
      if (savedImages !== null) {
        setImageUrl(JSON.parse(savedImages));
      }
    } catch (error) {
      console.error("Error loading images from storage:", error);
    }
  };

  const saveImagesToStorage = async (newImages) => {
    try {
      await AsyncStorage.setItem("savedImages", JSON.stringify(newImages));
    } catch (error) {
      console.error("Error saving images to storage:", error);
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
      const endpoint = `${NRROK_ADDRESS}/api/images/upload`;
      try {
        const formData = new FormData();
        formData.append("image", {
          uri,
          name: "image.jpg",
          type: "image/jpeg",
        });

        const response = await axios.post(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // 서버 응답을 확인하고 처리합니다.
        console.log("Upload response:", response.data);
      } catch (error) {
        console.error("Upload error:", error);
      }
    };
    if (!result.cancelled) {
      //이미지 업로드 결과 및 이미지 경로 업데이트
      const newImages = [result.assets[0].uri, ...imageUrl];

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
        {imageUrl && (
          <FlatList
            data={imageUrl}
            numColumns={3} // 3열 그리드
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.image} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
