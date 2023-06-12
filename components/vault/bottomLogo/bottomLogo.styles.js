import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    resizeMode: "contain",
  },
});

export default styles;
