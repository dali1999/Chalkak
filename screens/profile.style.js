import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default styles;
