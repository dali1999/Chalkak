import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: (color) => ({
    fontFamily: "extrabold",
    fontSize: SIZES.xLarge,
    color: color,
    // borderWidth: 1,
    width: 104,
  }),
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileText: {
    textAlign: "right",
    color: COLORS.gray,
    fontSize: SIZES.medium,
  },
});

export default styles;
