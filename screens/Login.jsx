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
import SignUp from "./SignUp";
import { Formik } from "formik";
import * as Yup from "yup";

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

  const login = console.log("LOGGED IN PRESSED");
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
                    placeholder="이메일을 입력하세요"
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
                    placeholder="Password"
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
