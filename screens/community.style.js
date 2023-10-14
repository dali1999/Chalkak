import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  popularPostContainer: {
    padding: 15,
  },
  allBoardContainer: {
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  boardButton: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    marginBottom: 5,
    borderRadius: 5,
  },
  boardButtonText: {
    fontSize: 16,
  },
  postButton: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    marginBottom: 5,
    borderRadius: 5,
  },
  postButtonText: {
    fontSize: 16,
  },
  moreButton: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  moreButtonText: {
    fontSize: 16,
  },
});
