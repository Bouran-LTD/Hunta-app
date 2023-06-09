import { View, ImageBackground, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, SIZES } from "../constants";
import Splash from "../assets/splash.png";
import CardSplash from "../components/splash/card/cardSplash";
import ButtonSplash from "../components/splash/button/buttonSplash";

const Welcome = () => {
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
        <CardSplash style={{ flex: 5 }} />
        <ButtonSplash style={{ flex: 1 }} />
      </ImageBackground>
    </View>
  );
};

export default Welcome;
