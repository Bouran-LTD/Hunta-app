import React from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./buttonSplashSaf.styles";

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
