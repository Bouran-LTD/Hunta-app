import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1.7,
    backgroundColor: COLORS.gray,
    marginLeft: SIZES.xxxxLarge,
    marginRight: SIZES.xxxLarge,
    borderRadius: SIZES.xSmall,
    borderColor: COLORS.secondary,
    borderWidth: 5,
  },
  secondaryContainer: {},
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
});

export default styles;
