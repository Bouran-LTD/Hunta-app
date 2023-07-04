import React from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./buttonSplash.styles";

const ButtonSplash = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("how")} style={styles.button}>
      <Text style={styles.text}>NEXT</Text>
    </Pressable>
  );
};

export default ButtonSplash;
