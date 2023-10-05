import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    borderWidth: 2,
    borderColor: COLORS.offwhite,
    width: SIZES.width / 3,
    height: SIZES.width / 3,
  },
  text: {
    borderWidth: 1,
    width: SIZES.width / 1.2,
    marginLeft: 5,
    height: 50,
  },
});

export default styles;
