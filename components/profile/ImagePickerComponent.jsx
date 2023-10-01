import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, Fontisto, AntDesign } from "@expo/vector-icons";
import styles from "../../components/profile/imagePickerComponent.style";
import localImage from "../../assets/갱수댕댕이.png";
import axios from "axios";
import { NRROK_ADDRESS } from "../../hook/config";

export default function ImagePickerComponent({ url }) {
  const [imageUrl, setImageUrl] = useState("");
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
    if (result.cancelled) {
      return null; //업로드 취소한 경우
    }

    //이미지 업로드 결과 및 이미지 경로 업데이트
    setImageUrl(result.assets[0].uri);
    uploadImage(result.assets[0].uri);

    const uploadImage = async (uri) => {
      const endpoint = `${NRROK_ADDRESS}/api/login`;
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
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={uploadImage} style={{ marginTop: 200 }}>
        <Text>이미지 업로드하기</Text>
      </TouchableOpacity>
      <View style={{ height: 400, borderWidth: 1 }}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.img} />
        ) : (
          <Image source={localImage} style={styles.img} />
        )}
      </View>
    </SafeAreaView>
  );
}
