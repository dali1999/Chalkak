import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
  },

  profileWrapper: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: SIZES.medium,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 40,
  },
  profileImgContainer: {
    borderRadius: 999,
    // width: 90,
    // height: 90,
    borderWidth: 1,
  },
  profileImg: {
    borderRadius: 999,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  profileInfoWrapper: { borderWidth: 0 },
  profileInfo: {
    marginTop: 10,
  },
  profileInfoRow: {
    flexDirection: "row",
    gap: 10,
  },

  imagesWrapper: {
    marginTop: 10,
  },

  logout: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    left: SIZES.width / 2 - 60,
    top: SIZES.height - 200,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logText: {
    position: "absolute",
    // top: 15,
    color: COLORS.lightWhite,
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
});

export default styles;
