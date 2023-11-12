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
    borderWidth: 1,
    borderColor: COLORS.gray2,
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
    marginLeft: 20,
  },
  profileImg: {
    borderRadius: 999,
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  username: {
    // borderWidth: 1,
    width: 120,
    fontSize: 20,
    bottom: 3,
    marginRight: 3,
    // fontFamily: "medium",
    textAlign: "right",
  },
  location: {
    // borderWidth: 1,
    fontSize: SIZES.small + 1,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    marginLeft: 50,
  },
});
export default styles;
