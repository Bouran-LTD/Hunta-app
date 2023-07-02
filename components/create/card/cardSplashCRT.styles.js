import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2.5,
  },
  cardContainer: {
    alignItems: "center",
    flex: 4,
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
    marginBottom: SIZES.large,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
    textAlign: "center",
    paddingLeft: SIZES.xLarge,
    paddingRight: SIZES.xLarge,
    paddingBottom: SIZES.smedium,
    marginBottom: SIZES.small,
  },
  head: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    paddingBottom: SIZES.smedium,
    paddingTop: SIZES.smedium,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.large,
    margin: SIZES.xSmall,
    marginTop: 150,
    marginBottom: SIZES.xxxxLarge,
    marginLeft: SIZES.xxxLarge,
    marginRight: SIZES.xxxLarge,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.gray,
  },
  textB: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
  },
  loginText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
    textAlign: "center",
    borderColor: COLORS.secondary,
    borderWidth: 2,
    paddingLeft: SIZES.xxxxLarge,
    paddingRight: SIZES.xxxxLarge,
    paddingTop: SIZES.medium,
    paddingBottom: SIZES.medium,
    marginBottom: SIZES.xxLarge,
  },
  form: {},
});

export default styles;
