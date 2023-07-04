import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.large,
    margin: SIZES.xSmall,
    marginTop: 140,
    marginBottom: SIZES.xxxxLarge,
    marginLeft: SIZES.xxxLarge,
    marginRight: SIZES.xxxLarge,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.gray,
  },
  text: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
  },
});

export default styles;
