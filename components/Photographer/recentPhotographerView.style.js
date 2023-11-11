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
    marginTop: 5,
  },

  profileInfoRow: {
    flexDirection: "row",
    gap: 10,
  },
  userNameRole: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  username: {
    fontSize: SIZES.large,
  },
  userrole: {
    fontSize: SIZES.medium,
    height: 25,
    position: "absolute",
    left: 60,
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.primary,
  },
});
export default styles;
