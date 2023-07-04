import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import { Link, SplashScreen, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import { images, COLORS, SIZES } from "../constants";
import Splash from "../assets/splash.png";
import CardSplashLOG from "../components/login/card/cardSplashLOG";

const LogIn = () => {
  const router = useRouter();

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
        style={{ flex: 100 }}
      >
        <Image
          source={images.logo}
          style={{
            width: 160,
            height: 37,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: SIZES.xxxLarge,
            flex: 1,
            resizeMode: "contain",
          }}
        />
        <CardSplashLOG style={{ flex: 5 }} />
      </ImageBackground>
    </View>
  );
};

export default LogIn;
