import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";

import styles from "./bottomLogo.styles";

import { images } from "../../../constants/index";

const BottomLogo = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={images.huntaFooter} />
    </View>
  );
};

export default BottomLogo;
