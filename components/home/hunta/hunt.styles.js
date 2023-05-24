import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    iconContainer: {
      marginTop: SIZES.xxxSmall,
      alignItems: 'center',
    },
    icon: {
      resizeMode: 'contain',
      height: height * 0.1,
      width: width * 0.2, // This will ensure the image fits within the specified dimensions
    },
    title: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: COLORS.secondary,
    },
    subTitle: {
      fontSize: SIZES.medium,
      fontFamily: FONT.regular,
      color: COLORS.secondary,
    },
});

export default styles;