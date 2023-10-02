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
import { Picker } from "@react-native-picker/picker";
// import DropDownPicker from "react-native-dropdown-picker";
import { MultiSelect } from "react-native-element-dropdown";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "./login.style";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NRROK_ADDRESS } from "../hook/config";

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
  // const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  //카테고리들
  const categories = [
    { label: "Horror", value: "Horror" },
    { label: "Romance", value: "Romance" },
    { label: "Action", value: "Action" },
  ];

  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

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
  const registerUser = async (values) => {
    setLoader(true);
    try {
      const endpoint = `${NRROK_ADDRESS}/api/register`;
      const data = values;
      data.categories = selectedCategories;

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
            role: "user",
            category: "",
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
            setFieldValue,
          }) => (
            <ScrollView>
              {/* username ==============================================*/}
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

              {/* location ==============================================*/}
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

              {/* password ===============================================*/}
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

              {/* role Picker ============================================*/}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Role</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: COLORS.primary,
                    padding: 2,
                  }}
                >
                  <Picker
                    selectedValue={values.role}
                    onValueChange={(itemValue) =>
                      setFieldValue("role", itemValue)
                    }
                  >
                    <Picker.Item label="일반 사용자" value="user" />
                    <Picker.Item label="사진 작가" value="photographer" />
                  </Picker>
                </View>
              </View>

              {/* category ===============================================*/}
              <View style={styles.wrapper}>
                <Text style={styles.label}>Category</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: COLORS.primary,
                    padding: 2,
                  }}
                >
                  <MultiSelect
                    data={categories}
                    labelField="label"
                    valueField="value"
                    placeholder="관심있는 카테고리"
                    value={selectedCategories}
                    min={0} // 최소 선택 항목 수
                    max={2} // 최대 선택 항목 수
                    onChange={(item) => {
                      setSelectedCategories(item);
                    }}
                    renderItem={renderDataItem}
                    renderSelectedItem={(item, unSelect) => (
                      <TouchableOpacity
                        onPress={() => unSelect && unSelect(item)}
                      >
                        <View style={styles.selectedStyle}>
                          <Text style={styles.textSelectedStyle}>
                            {item.label}
                          </Text>
                          <AntDesign color="black" name="delete" size={17} />
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                  {/* <Text>선택한 장르:</Text>
                  {selectedCategories.map((categories) => (
                    <Text key={categories.value}>{categories.label}</Text>
                  ))} */}
                </View>
              </View>

              {/* 회원가입 버튼================================================== */}
              <Button
                loader={loader}
                title={"회 원 가 입"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />
            </ScrollView>
          )}
        </Formik>
      </View>
    </View>
  );
}
//../assets/갱수댕댕이.png
