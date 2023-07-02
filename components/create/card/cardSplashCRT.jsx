import React from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";

import styles from "./cardSplashCRT.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const CardSplashCRT = () => {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const auth = FIREBASE_AUTH;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.head}>Sign up</Text>
        <Text style={styles.text}>
          Enter a username and email to start playing
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.loginText}
            placeholder="Enter username"
            onChangeText={(text) => setUsername(text)}
            value="username"
          ></TextInput>
          <TextInput
            style={styles.loginText}
            placeholder="Enter email address"
            inputMode="email"
            autoCapitalize="none"
            value="email"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("safety")}
          style={styles.button}
        >
          <Text style={styles.textB}>REGISTER</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardSplashCRT;
