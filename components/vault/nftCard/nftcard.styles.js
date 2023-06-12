import { StyleSheet, Dimensions, flex, column, row } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
  },
  secondaryContainer: {
    flexBasis: "50%",
    flexWrap: "wrap",
  },
  images: {
    resizeMode: "fill",
    height: height * 0.14,
    width: width * 0.32, // This will ensure the image fits within the specified dimensions
    borderRadius: SIZES.medium,
  },
  cardContainer: {
    marginRight: SIZES.smedium,
    marginLeft: SIZES.smedium,
    marginBottom: SIZES.smedium,
    borderRadius: SIZES.medium,
  },
  outerContainer: {
    flexDirection: column,
    gap: SIZES.smedium,
  },
});

export default styles;
