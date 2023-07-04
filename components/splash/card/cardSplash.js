import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./cardSplash.styles";

import { icons } from "../../../constants/index";

const CardSplash = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>Welcome to Hunta</Text>
      <Text style={styles.text}>
        Real world treasure hunts with Augmented Reality
      </Text>
      <Text style={styles.text1}>Complete a hunt to earn a reward!</Text>
      <Image style={styles.icon} source={icons.pinBlue}></Image>
    </View>
  );
};

export default CardSplash;
