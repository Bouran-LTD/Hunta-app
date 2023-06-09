import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./usernamesharable.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const UsernameSharable = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>Ozwald#2006</Text>
        <Image style={styles.icon} source={icons.blip} />
      </View>
    </View>
  );
};

/*THIS DOESNT CHANGE WE JUST USE THIS FOR CAPTURE REF */
export default UsernameSharable;
