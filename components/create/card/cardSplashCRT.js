import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, Form } from "react-native";

import styles from "./cardSplashCRT.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const CardSplashCRT = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>Sign up</Text>
      <Text style={styles.text}>
        Enter a username and email to start playing
      </Text>
    </View>
  );
};

export default CardSplashCRT;
