import React, { useState } from "react";
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
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

import styles from "./cardSplashCRT.styles";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const CardSplashCRT = () => {
  const navigation = useNavigation<any>(); // Specify the type as `any`

  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  const createProfile = async (
    response: FirebaseAuthTypes.UserCredential
  ) => {
    db().ref(`/users/${response.user?.uid}`).set({ name });
  };

  const registerAndGoToMainFlow = async () => {
    if (name && email) {
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          name
        );

        if (response.user) {
          await createProfile(response);
          navigation.navigate("safety"); // Use `navigation.navigate` directly
        }
      } catch (e) {
        Alert.alert("Oops", "Please check your entry and try again");
      }
    }
  };

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
            placeholder="Username"
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            style={styles.loginText}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            inputMode="email"
            autoCapitalize="none"
          ></TextInput>
        </View>
      </View>
      <View>
        <Pressable
          onPress={registerAndGoToMainFlow} // Remove onPress from Text and use onPress directly on Pressable
          style={styles.button}
        >
          <Text style={styles.textB}>REGISTER</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardSplashCRT;
