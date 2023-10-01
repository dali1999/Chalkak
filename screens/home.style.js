import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    paddingHorizontal: 10,
    // backgroundColor: COLORS.gray2,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  searchBarText: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
    width: "80%",
  },
});

export default styles;
