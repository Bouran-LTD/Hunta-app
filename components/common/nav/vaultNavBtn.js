import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./screenNav.style";
import { icons } from "../../../constants";

const VaultNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.navigate("home")}>
          <Image style={styles.icon} source={icons.home} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("vault")}>
          <Image style={styles.icon} source={icons.profileOutline} />
        </Pressable>
      </View>
    </View>
  );
};

export default VaultNavBar;
