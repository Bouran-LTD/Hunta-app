import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./usename.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const Username = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subTitle}>Ozwald#2006</Text>
      <View style={styles.textContainer}>
        <Image style={styles.icon} source={icons.blip} />
      </View>
    </View>
  );
};

export default Username;
