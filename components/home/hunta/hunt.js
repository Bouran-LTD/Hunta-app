import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { COLORS, icons, images, SIZES} from "../constants";
import styles from "./hunt.styles";

const Hunt = () => {
    const router = useRouter();

    return (
        <View style={styles.Icon}>
            <Image source={icons.treeBlue}></Image>          
        </View>,
        <View style={styles.title}>
            <Text>Christmas Wonderland</Text>
        </View>,
        <View style={styles.subTitle}>
            <Text>Feel the wonder as you hunt for festive themed AR stamps around Bournemouth town centre.</Text>
        </View>
    );
};

export default Hunt