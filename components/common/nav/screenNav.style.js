import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: COLORS.gray,
    margin: 0,
    padding: 10,
  },
  mainContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    margin: "auto",
    resizeMode: "contain",
    height: height * 0.05,
    width: width * 0.2, // This will ensure the image fits within the specified dimensions
    marginBottom: 10,
  },
});

export default styles;
