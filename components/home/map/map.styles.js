import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create ({
    pressable: {
        marginTop: SIZES.medium,
        flex: 4,
        margin: SIZES.xSmall,
        borderRadius: SIZES.medium,
        justifyContent: "center",
    },
    text: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.tertiary,
        textAlign: "center",
        margin: SIZES.xxxSmall,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: SIZES.medium,
        padding: SIZES.large,
      },
    view: {
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.small,
        margin: SIZES.medium,
    },
});

export default styles;