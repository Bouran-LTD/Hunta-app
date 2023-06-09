import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";

import styles from "./huntdescriptor.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const HuntDescriptor = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>Christmas Wonderland</Text>
        <Image style={styles.icon} source={icons.treeBlue} />
      </View>
    </View>
  );
};

export default HuntDescriptor;
