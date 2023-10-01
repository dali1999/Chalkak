import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.offwhite,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  searchImg: {
    resizeMode: "contain",
    width: SIZES.width - 80,
    height: SIZES.height - 300,
    opacity: 0.9,
  },
});
export default styles;
