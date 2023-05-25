import React from "react";
import MapView from 'react-native-maps';
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./huntExtra.styles";

import { COLORS, icons, images, SIZES} from "../../../constants";


const HuntExtra = () => {
    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Image style={styles.icon} source={icons.pinBlue} />
                <Text style={styles.subTitle}>Start: The Triangle {'\n'} Finish: The Pier {'\n'} Distance: 1 mile</Text>
            </View>
            <View style={styles.textContainer1}>
                <Image style={styles.icon} source={icons.starBlue} />
                <Text style={styles.subTitle}>AR stamps: Collect 6{'\n'}Reward: Gift card{'\n'}Lucky Dips from £5-£100</Text>
            </View>
        </View>
    );
};


export default HuntExtra