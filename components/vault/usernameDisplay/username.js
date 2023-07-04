import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { captureAndShare } from "../sharedComp/sharedcomp";

import styles from "./username.styles";

import { icons } from "../../../constants/index";

const Username = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>Ozwald#2006</Text>
        <TouchableOpacity title="Capture and Share" onPress={captureAndShare}>
          <Image style={styles.icon} source={icons.share} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Username;
