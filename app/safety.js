import { View, ImageBackground, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, SIZES } from "../constants";
import Splash from "../assets/splash.png";
import CardSplashSaf from "../components/safety/card/cardSplashSaf";
import ButtonSplashSaf from "../components/safety/button/buttonSplashSaf";

const Safety = () => {
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
        <CardSplashSaf style={{ flex: 5 }} />
        <ButtonSplashSaf style={{ flex: 1 }} />
      </ImageBackground>
    </View>
  );
};

export default Safety;
