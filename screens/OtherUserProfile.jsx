import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import styles from "./profile.style";
import AppBar from "../components/AppBar/AppBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePickerComponent from "../components/profile/ImagePickerComponent";

export default function OtherUserProfile({ route }) {
  const [userData, setUserData] = useState(null);
  //   const [isPhotographer, setIsPhotographer] = useState(false);

  useEffect(() => {
    if (route.params && route.params.photographer) {
      setUserData(route.params.photographer);
    }
  }, [route.params]);

  const checkUser = async () => {
    try {
      console.log("아이템: ", route);
      console.log("userData: ", userData);
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  return (
    <SafeAreaView>
      <AppBar title={"프로필"} color={COLORS.gray} />

      <View>
        <View style={styles.container}>
          {/* 프로필 ================================================ */}
          <View style={styles.profileWrapper}>
            <View style={styles.profileContainer}>
              <TouchableOpacity style={styles.profileImgContainer}>
                <Image
                  source={require("../assets/갱수댕댕이.png")}
                  style={styles.profileImg}
                />
              </TouchableOpacity>

              <View style={styles.profileInfoWrapper}>
                <View>
                  {userData && userData.username ? (
                    <Text style={{ fontSize: 24 }}>{userData.username}</Text>
                  ) : (
                    <Text>Loading...</Text>
                  )}
                </View>
                <View style={styles.profileInfo}>
                  <View style={styles.profileInfoRow}>
                    <Ionicons
                      name="ios-camera-outline"
                      size={15}
                      color={COLORS.gray}
                    />
                    <View>
                      {userData && userData.category ? (
                        <Text style={{ color: COLORS.primary }}>
                          {userData.category?.slice(0, 5).join(" | ")}
                        </Text>
                      ) : (
                        <Text>Loading...</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.profileInfoRow}>
                    <Ionicons
                      name="location-outline"
                      size={15}
                      color={COLORS.gray}
                    />
                    <View>
                      {userData && userData.location ? (
                        <Text>{userData.location}</Text>
                      ) : (
                        <Text>Loading...</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.profileInfoRow}>
                    <Ionicons
                      name="cash-outline"
                      size={15}
                      color={COLORS.gray}
                    />
                    <Text>80,000 ~ 300,000 원</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* 이미지 업로드 ==========================================*/}
          <ImagePickerComponent userId={userData?._id} />
          <View
            style={{
              width: 170,
              height: 60,
              backgroundColor: COLORS.offwhite,
              position: "absolute",
              top: 170,
            }}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
