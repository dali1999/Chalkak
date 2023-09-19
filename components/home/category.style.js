import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  category: {
    backgroundColor: COLORS.purple,
    padding: 10,
    width: 60,
    height: 60,
    marginVertical: 10,
    marginHorizontal: 20,
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
    padding: -10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: COLORS.secondary,
  },
});
export default styles;
