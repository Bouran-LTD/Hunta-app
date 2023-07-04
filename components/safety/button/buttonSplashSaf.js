import React from "react";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./buttonSplashSaf.styles";

import { COLORS, FONTS, SIZES } from "../../../constants";

const ButtonSplashSaf = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("home")}
      style={styles.button}
    >
      <Text style={styles.text}>START PLAYING</Text>
    </Pressable>
  );
};

export default ButtonSplashSaf;
