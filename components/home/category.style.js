import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  category: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    // padding: 0,
    width: 60,
    height: 60,
    marginVertical: 10,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  categoryText: {
    color: "black",
    fontSize: 15,
    fontFamily: "extrabold",
  },
  categoryWrapper: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary2,
    margin: SIZES.medium,
    borderRadius: SIZES.small,
  },
});
export default styles;
