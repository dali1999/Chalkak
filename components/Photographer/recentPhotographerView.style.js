import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  // recentWrapper: { paddingHorizontal: SIZES.small },
  recentViewWrapper: {
    backgroundColor: COLORS.offwhite,
    width: "100%",
    height: 120,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 40,
    borderWidth: 3,
    borderColor: COLORS.primary2,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 35,
  },
  profileImgContainer: {
    borderRadius: 999,
    borderWidth: 1,
  },
  profileImg: {
    borderRadius: 999,
    width: 70,
    height: 70,
    resizeMode: "cover",
  },

  profileInfoWrapper: {},
  profileInfo: {
    marginTop: 10,
  },

  profileInfoRow: {
    flexDirection: "row",
    gap: 10,
  },

  //   profileRightImg: {
  //     borderBottomRightRadius: SIZES.small,
  //     borderTopRightRadius: SIZES.small,
  //     width: 101,
  //     height: 120,
  //     resizeMode: "cover",
  //   },
});
export default styles;
