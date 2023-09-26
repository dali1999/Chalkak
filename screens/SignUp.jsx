import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "./login.style";
import Button from "../components/Button";
// import SignUp from "./SignUp";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be ar least 8 character")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  location: Yup.string()
    .min(2, "Provide a valid location")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid username")
    .required("Required"),
});

export default function Login({ navigation }) {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
    ]);
  };

  //회원가입 시 반환
  //맥 : 192.168.0.5
  //윈도우 : 192.168.55.136
  //ngrok : 7d54-175-117-199-226.ngrok-free.app
  const registerUser = async (values) => {
    setLoader(true);
    try {
      const endpoint =
        "http://7d54-175-117-199-226.ngrok-free.app/api/register";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 201) {
        navigation.replace("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, backgroundColor: COLORS.primary }} />

      <View style={{ flex: 0.6 }}>
        <View style={styles.logoArea}>
          <Text style={styles.logo}>찰 칵</Text>
        </View>
      </View>

      <View style={{ flex: 2, marginHorizontal: 30 }}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            location: "",
            username: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => registerUser(values)}
        >
          {({
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
          }) => (
            <View>
              {/* username ==========================================*/}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Username</Text>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.primary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="이름"
                    onFocus={() => {
                      setFieldTouched("username");
                    }}
                    onBlur={() => {
                      setFieldTouched("username", "");
                    }}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    autoCapitalize="none"
                    antoCorrect="false"
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>

              {/* email================================================== */}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Email</Text>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.primary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="이메일"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    antoCorrect="false"
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>

              {/* location ===========================================*/}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Location</Text>
                <View
                  style={styles.inputWrapper(
                    touched.location ? COLORS.primary : COLORS.offwhite
                  )}
                >
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    placeholder="거주지"
                    onFocus={() => {
                      setFieldTouched("location");
                    }}
                    onBlur={() => {
                      setFieldTouched("location", "");
                    }}
                    value={values.location}
                    onChangeText={handleChange("location")}
                    autoCapitalize="none"
                    antoCorrect="false"
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.location && errors.location && (
                  <Text style={styles.errorMessage}>{errors.location}</Text>
                )}
              </View>

              {/* password================================================== */}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.primary : COLORS.offwhite
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                    style={styles.iconStyle}
                  />
                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="비밀번호"
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    autoCapitalize="none"
                    antoCorrect="false"
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              {/* 회원가입 버튼================================================== */}
              <Button
                loader={loader}
                title={"회 원 가 입"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
//../assets/갱수댕댕이.png
