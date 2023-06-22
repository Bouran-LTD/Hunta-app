import { View, Text } from "react-native";
import { Link, SplashScreen, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import { images } from "../constants";
import Splash from "../assets/splash.png";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
