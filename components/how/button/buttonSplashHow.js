import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./buttonSplashHow.styles";

import { COLORS, FONTS, SIZES } from "../../../constants";

const ButtonSplashHow = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("create")}
      style={styles.button}
    >
      <Text style={styles.text}>NEXT</Text>
    </Pressable>
  );
};

export default ButtonSplashHow;
