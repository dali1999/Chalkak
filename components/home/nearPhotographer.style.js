import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  nearWrapper: {
    // borderWidth: 2,
    paddingVertical: 10,
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    backgroundColor: COLORS.primary2,
    borderRadius: SIZES.small,
  },
});
export default styles;
