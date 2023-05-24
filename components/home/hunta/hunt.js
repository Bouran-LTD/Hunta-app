import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./hunt.styles";

import { COLORS, icons, images, SIZES} from "../../../constants";


const Hunt = () => {
    const router = useRouter();

    return (
        <View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={icons.treeBlue} />
            </View>
            <View>
                <Text style={styles.title}>Christmas Wonderland</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Feel the wonder as you hunt for festive themed AR stamps around Bournemouth town centre.</Text>
            </View>
        </View>
    );
};


export default Hunt