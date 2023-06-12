import React from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";

import styles from "./nftcard.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const NftCard = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
      <View style={styles.cardContainer}>
        <Image style={styles.images} source={images.wheel} />
      </View>
    </View>
  );
};

export default NftCard;
