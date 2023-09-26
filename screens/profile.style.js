import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    // alignItems: "center",
    height: SIZES.height,
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
  profileContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    gap: 40,
  },
  profileWrapper: {
    height: 150,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.primary2,
    margin: SIZES.medium,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  profileImgContainer: {
    borderRadius: 999,
    width: 80,
    height: 80,
    borderWidth: 1,
  },
  profileImg: {
    borderRadius: 999,
    width: 80,
    height: 80,
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

  logoutWrapper: {
    alignItems: "center",
  },
  logout: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
