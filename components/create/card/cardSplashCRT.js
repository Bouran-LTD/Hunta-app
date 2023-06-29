import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./cardSplashCRT.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const CardSplashCRT = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>How it works</Text>
      <Text style={styles.text}>
        Choose a trail then use the map to navigate
      </Text>
      <Text style={styles.text}>Visit each pin to collect an AR stamp</Text>
      <Text style={styles.text1}>Find all the stamps to collect a reward</Text>
      <Image style={styles.icon} source={icons.starBlue}></Image>
    </View>
  );
};

export default CardSplashCRT;
