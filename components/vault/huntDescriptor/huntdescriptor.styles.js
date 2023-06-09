import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    resizeMode: "contain",
    height: height * 0.045,
    width: width * 0.15, // This will ensure the image fits within the specified dimensions
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: SIZES.xxxxLarge,
  },
  subTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
});

export default styles;
