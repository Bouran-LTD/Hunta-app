import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./cardSplashSaf.styles";

import { icons } from "../../../constants/index";

const CardSplashSaf = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>Safety</Text>
      <Text style={styles.text}>
        Remember to be safe and pay attention to your surroundings
      </Text>
      <Text style={styles.text1}>
        By using this app you agree to our Terms and Conditions
      </Text>
      <Image style={styles.icon} source={icons.target}></Image>
    </View>
  );
};

export default CardSplashSaf;
