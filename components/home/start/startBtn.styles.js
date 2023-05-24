import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create ({
    button: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.tertiary,
    },
});

export default styles;