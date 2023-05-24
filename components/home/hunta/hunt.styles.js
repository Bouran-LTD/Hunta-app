import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/index";

const styles = StyleSheet.create ({
    icon: {
        marginTop: SIZES.xLarge,
        alignItems: "center",
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