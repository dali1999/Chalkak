import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants"; // 해당 CONSTANTS 파일의 경로를 작성해주세요.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    padding: SIZES.medium,
  },
  postItem: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    marginVertical: SIZES.small,
    borderRadius: SIZES.medium,
    ...SHADOWS.small,
  },
  postTitle: {
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  writeButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    alignItems: "center",
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    ...SHADOWS.medium,
  },
  writeButtonText: {
    color: COLORS.white,
    fontSize: SIZES.large,
  },
});

export default styles;
