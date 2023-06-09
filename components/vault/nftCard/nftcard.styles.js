import { StyleSheet, Dimensions, column } from "react-native";

import { SIZES } from "../../../constants/index";

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
    resizeMode: "contain",
    height: height * 0.15,
    width: width * 0.34, // This will ensure the image fits within the specified dimensions
    borderRadius: SIZES.medium,
  },
  cardContainer: {
    marginRight: SIZES.xSmall,
    marginLeft: SIZES.xSmall,
    marginBottom: SIZES.xSmall,
    borderRadius: SIZES.medium,
  },
  outerContainer: {
    flexDirection: column,
    gap: SIZES.xSmall,
  },
});

export default styles;
