import React from "react";
import { useRouter } from "expo-router";
import { Pressable , Text, ImageBackground, View } from "react-native";

import styles from "./map.styles";

import { COLORS, FONTS, SIZES, images} from "../../../constants";

const Map = () => {
    const router = useRouter();

    return (
        <Pressable style={styles.pressable}>
            <ImageBackground style={styles.image} source={images.wheel}>
                <View style={styles.view}>
                    <Text style={styles.text}>VIEW ROUTE &rarr; </Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default Map