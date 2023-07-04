import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

import styles from "./cardSplashLOG.styles";

import { FIREBASE_AUTH } from "../../../FirebaseConfig";

import {signInWithEmailAndPassword} from "firebase/auth";

const CardSplashLOG = () => {
  const navigation = useNavigation();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("safety");
    } catch (error) {
      console.log(error);
      alert("Error Logging in " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.head}>Log in</Text>
        <Text style={styles.text}>
          Enter a username and email to start playing
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.loginText1}
            placeholder="Enter username"
            onChangeText={(text) => setPassword(text)}
            value={password}
          ></TextInput>
          <TextInput
            style={styles.loginText2}
            placeholder="Enter email address"
            inputMode="email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <Text style={styles.text1}>
            Not account yet ?
          </Text>
          <Button mode="text" title="Sign Up" onPress={() => navigation.navigate("create")} style={styles.text2}/>
        </View>
      </View>

      <View>
      { loading ? <ActivityIndicator size="large" color="#00ff00" /> 
          : <>
          <Button title="Log in" onPress={() => signIn()} />

          </>}
      </View>
    </View>
  );
};

export default CardSplashLOG;
