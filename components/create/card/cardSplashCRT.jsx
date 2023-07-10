import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

import styles from "./cardSplashCRT.styles";

import { FIREBASE_AUTH } from "../../../FirebaseConfig";

import {createUserWithEmailAndPassword} from "firebase/auth";

const CardSplashCRT = () => {
  const navigation = useNavigation();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("safety");
    } catch (error) {
      console.log(error);
      alert("Error signing up " + error.message);
      
    } finally {
      setLoading(false);
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
            Already a user ?
          </Text>
          <Button mode="text" title="Log In" color="#EDFF00" onPress={() => navigation.navigate("login")} style={styles.text2}/>
        </View>
      </View>
      <View>
      <View>
      { loading ? <ActivityIndicator size="large"  /> 
          : <>
          <Button title="Sign up" onPress={() => signUp()} color="#EDFF00"/>

          </>}
      </View>
      </View>
    </View>
  );
};

export default CardSplashCRT;
