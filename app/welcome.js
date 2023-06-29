import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Link, SplashScreen, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import { images, COLORS, SIZES } from "../constants";
import Splash from "../assets/splash.png";
import CardSplash from "../components/splash/card/cardSplash";

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
        <TouchableOpacity style={{ color: COLORS.tertiary, flex: 1 }}>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

// add in components next //
