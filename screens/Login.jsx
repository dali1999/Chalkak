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
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
});

export default function Login({ navigation }) {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
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

  //로그인 시 반환
  const login = async (values) => {
    setLoader(true);
    try {
      //맥 192.168.0.5
      //윈도우 192.168.55.136
      const endpoint = "https://29c3-175-117-199-226.ngrok-free.app/api/login";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);

        await AsyncStorage.setItem(
          //user923874293847923847
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );
        await AsyncStorage.setItem("id", JSON.stringify(responseData._id));
        navigation.replace("Bottom Navigation");
      } else {
        Alert.alert(
          "Error Loggin in",
          "Please provide valid required credentials",
          [
            {
              text: "Cancel",
              onPress: () => {},
            },
            {
              text: "Continue",
              onPress: () => {},
            },
          ]
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Oops, Error loggin in! try again", [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Continue",
          onPress: () => {},
        },
      ]);
    } finally {
      setLoader(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, backgroundColor: COLORS.primary }} />

      <View style={{ flex: 1.5 }}>
        <View style={styles.logoArea}>
          <Text style={styles.logo}>찰 칵</Text>
        </View>
      </View>

      <View style={{ flex: 2, marginHorizontal: 30 }}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => login(values)}
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
              {/* email================================================== */}
              <View style={styles.wrapper}>
                {/* <Text style={styles.label}>Email</Text> */}
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

              {/* password================================================== */}
              <View style={styles.wrapper}>
                {/* <Text style={styles.label}>Password</Text> */}
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

              {/* 로그인버튼================================================== */}
              <Button
                loader={loader}
                title={"로 그 인"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />

              <Text
                style={styles.registration}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                Register
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
//../assets/갱수댕댕이.png
