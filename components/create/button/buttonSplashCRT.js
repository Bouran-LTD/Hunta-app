import React from "react";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./buttonSplashCRT.styles";

import { COLORS, FONTS, SIZES } from "../../../constants";

const ButtonSplashCRT = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("safety")}
      style={styles.button}
    >
      <Text style={styles.text}>NEXT</Text>
    </Pressable>
  );
};

export default ButtonSplashCRT;
