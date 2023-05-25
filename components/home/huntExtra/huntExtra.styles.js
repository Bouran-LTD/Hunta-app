import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: SIZES.medium,
        marginLeft: 'auto',
        marginRight: 'auto' ,
    },
    icon: {
      resizeMode: 'contain',
      height: height * 0.06,
      width: width * 0.2, // This will ensure the image fits within the specified dimensions
    },
    textContainer: {
      alignItems: "center",
      flexDirection: "row",
      marginBottom: SIZES.xxxxLarge,
    },
    textContainer1: {
      alignItems: "center",
      flexDirection: "row",
      marginBottom: SIZES.large,
    },
    subTitle: {
      fontSize: SIZES.small,
      fontFamily: FONT.regular,
      color: COLORS.secondary,
    },
});

export default styles;