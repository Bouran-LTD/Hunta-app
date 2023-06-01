import React from "react";
import { useRouter } from "expo-router";
import { Pressable, Image, View, Text } from "react-native";

import styles from "./screenNav.style";

import { COLORS, FONTS, SIZES, icons } from "../../../constants";

const NavigationBar = () => {
    const router = useRouter();

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.mainContainer}>
                <Pressable>
                <Image style={styles.icon} source={icons.home} />
                </Pressable>
                <Pressable>
                <Image style={styles.icon} source={icons.profileOutline} />
                </Pressable>
            </View>
        </View>
    );
};

export default NavigationBar