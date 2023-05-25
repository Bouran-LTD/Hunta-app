import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    iconContainer: {
      marginTop: SIZES.xxxxSmall,
      alignItems: 'center',
      marginBottom: SIZES.small,
    },
    icon: {
      resizeMode: 'contain',
      height: height * 0.07,
      width: width * 0.2, // This will ensure the image fits within the specified dimensions
    },
    textContainer: {
      alignItems: "center",
      marginBottom: SIZES.xxSmall,
    },
    title: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: COLORS.secondary,
    },
    subTitle: {
      fontSize: SIZES.smedium,
      fontFamily: FONT.regular,
      color: COLORS.secondary,
      textAlign: "center",
    },
});

export default styles;