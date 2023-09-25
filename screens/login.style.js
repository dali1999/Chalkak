import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: "column",
    backgroundColor: "white",
  },
  logoArea: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.gray2,
    paddingBottom: 50,
  },
  logo: {
    color: COLORS.primary,
    fontFamily: "extrabold",
    fontSize: SIZES.xxLarge + 50,
  },
  btnArea: {
    height: 10,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  btnText: (color) => ({
    fontSize: SIZES.large + 3,
    fontFamily: "bold",
    color: color,
  }),
  btnLogin: {
    flex: 1,
    width: SIZES.width / 1.5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  btnRegister: {
    flex: 1,
    width: SIZES.width / 1.5,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default styles;
