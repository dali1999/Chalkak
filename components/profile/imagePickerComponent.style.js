import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  uploadBtn: {
    flexDirection: "row",
    // borderWidth: 1,
    // backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnText: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginTop: 3,
  },

  imagesWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.gray2,
  },
  image: {
    borderWidth: 2,
    borderColor: COLORS.offwhite,
    width: SIZES.width / 3,
    height: SIZES.width / 3,
  },
});

export default styles;
