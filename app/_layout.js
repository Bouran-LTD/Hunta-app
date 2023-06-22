import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { COLORS, FONT } from "../constants/theme";

import Home from "../app/home";
import Vault from "../app/vault";
import Loader from "../app/loader";
import Welcome from "../app/welcome";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "loader",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    ManropeExtraBold: require("../assets/fonts/Manrope-ExtraBold.ttf"),
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Navigator
        initialRouteName="loader"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <Image source={images.logo} style={{ width: 103, height: 24 }} />
          ),
        }}
      >
        <Stack.Screen name="loader" component={Loader} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="vault" component={Vault} />
      </Stack.Navigator>
    </Stack>
  );
};

export default Layout;
