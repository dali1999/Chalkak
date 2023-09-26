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

  logout: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    left: SIZES.width / 2 - 60,
    bottom: 100,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    width: 120,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logText: {
    position: "absolute",
    top: 15,
    color: COLORS.lightWhite,
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
});

export default styles;
