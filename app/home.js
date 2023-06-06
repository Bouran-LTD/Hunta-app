import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { COLORS, icons, images, SIZES } from "../constants";
import Hunt from "../components/home/hunta/hunt";
import StartBtn from "../components/home/start/startBtn";
import HuntExtra from "../components/home/huntExtra/huntExtra";
import Map from "../components/home/map/map";
import NavigationBar from "../components/common/nav/homeNavBtn";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitle: null,
          headerShadowVisible: false,
          headerRight: () => (
            <Image source={images.logo} style={{ width: 103, height: 24 }} />
          ),
        }}
      />
      <View
        name="main background blue"
        style={{
          flex: 20,
          padding: SIZES.xxxxSmall,
          paddingTop: SIZES.xxxSmall,
          paddingBottom: SIZES.xxxSmall,
          margin: SIZES.large,
          marginTop: SIZES.medium,
          marginBottom: SIZES.xSmall,
          borderRadius: SIZES.medium,
          backgroundColor: COLORS.secondary,
        }}
      >
        <View
          name="top panel"
          style={{
            flex: 15,
            padding: SIZES.large,
            margin: SIZES.xSmall,
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.gray,
          }}
        >
          //Basic info about the Hunt and route
          <Hunt />
          //Extra details about the Hunts
          <HuntExtra />
          //See Route map buttton
          <Map />
        </View>
        //Start button that activates Unity //Need to connect to a new page and
        integrate unity into such page
        <View
          name="bottom panel"
          style={{
            flex: 1,
            padding: SIZES.large,
            margin: SIZES.xSmall,
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.gray,
          }}
        >
          <StartBtn />
        </View>
      </View>
      //Navigation bar at bottom of the screen //Need to move to the layout for
      proper effeciencies
      <View style={{ flex: 1 }}>
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
