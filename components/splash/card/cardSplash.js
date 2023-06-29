import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";

import styles from "./cardSplash.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const CardSplash = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondaryContainer}>
        <View style={styles.outerContainer}></View>
      </View>
    </View>
  );
};

export default CardSplash;
