import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";

import styles from "./bottomlogo.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const BottomLogo = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={images.huntaFooter} />
    </View>
  );
};

export default BottomLogo;
