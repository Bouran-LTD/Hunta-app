import React, { useEffect } from "react";
import { SafeAreaView, View, Image, ImageBackground } from "react-native";
import { Link, SplashScreen, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import { images } from "../constants";
import Splash from "../assets/splash.png";
import Welcome from "./welcome.js";

const Loader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("welcome"); // Replace "Welcome" with the actual name of your welcome screen component
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <ImageBackground
        source={Splash}
        resizeMode="stretch"
        style={{ flex: 1000 }}
      >
        <Image
          source={images.logo}
          style={{
            width: 354,
            height: 82,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Loader;
