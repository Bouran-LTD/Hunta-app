import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

import VaultNavBar from "../components/common/nav/vaultNavBtn";
import ShareComp from "../components/vault/shareComp/shareComp";

const Vault = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <Image source={images.logo} style={{ width: 103, height: 24 }} />
          ),
          headerLeft: () => "",
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
            paddingLeft: SIZES.xLarge,
            PaddingRight: SIZES.xLarge,
            margin: SIZES.xSmall,
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.gray,
          }}
        >
          <ShareComp />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <VaultNavBar />
      </View>
    </SafeAreaView>
  );
};

export default Vault;
