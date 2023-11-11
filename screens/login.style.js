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
  },
  logo: {
    color: COLORS.primary,
    fontFamily: "extrabold",
    fontSize: SIZES.xxLarge + 50,
  },

  wrapper: {
    marginBottom: 20,
    // marginHorizontal: 30,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  registration: {
    marginTop: 10,
    textAlign: "center",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
  },
  selectedTextStyle: {
    fontSize: SIZES.medium,
  },
  textSelectedStyle: {
    color: COLORS.primary,
  },
  
});

export default styles;
