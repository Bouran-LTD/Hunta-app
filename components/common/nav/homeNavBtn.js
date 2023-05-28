import React from "react";
import { useRouter } from "expo-router";
import { Pressable, Images, View, Text } from "react-native";

import styles from "./screenNav.style";

import { COLORS, FONTS, SIZES, icons } from "../../../constants";

const NavigationBar = () => {
    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <Text>Hey Navigator</Text>
        </View>
    );
};

export default NavigationBar