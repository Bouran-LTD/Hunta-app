import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1.5,
    backgroundColor: COLORS.gray,
    marginLeft: SIZES.xxxxLarge,
    marginRight: SIZES.xxxLarge,
    borderRadius: SIZES.xSmall,
    borderColor: COLORS.secondary,
    borderWidth: 5,
  },
  icon: {
    resizeMode: "contain",
    height: height * 0.08,
    width: width * 0.2,
    marginBottom: SIZES.xLarge,
  },
  cardContainer: {
    marginRight: SIZES.xSmall,
    marginLeft: SIZES.xSmall,
    marginBottom: SIZES.xSmall,
    borderRadius: SIZES.medium,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
    textAlign: "center",
    paddingLeft: SIZES.small,
    paddingRight: SIZES.small,
    paddingBottom: SIZES.xxLarge,
  },
  text1: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
    textAlign: "center",
    paddingLeft: SIZES.large,
    paddingRight: SIZES.large,
    paddingBottom: SIZES.xxxLarge,
  },
  head: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    paddingBottom: SIZES.xLarge,
    paddingTop: SIZES.medium,
  },
});

export default styles;
