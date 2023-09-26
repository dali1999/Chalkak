import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  nearViewWrapper: {
    backgroundColor: COLORS.offwhite,
    width: "100%",
    height: 70,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 0,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 0,
  },
  profileImgContainer: {
    borderRadius: 999,
    borderWidth: 1,
  },
  profileImg: {
    borderRadius: 999,
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  username: {
    // borderWidth: 1,
    width: 80,
    fontSize: SIZES.large,
    fontFamily: "bold",
    textAlign: "right",
  },
  location: {
    // borderWidth: 1,
    fontSize: SIZES.medium,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    marginLeft: 50,
  },
});
export default styles;
