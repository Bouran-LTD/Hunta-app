import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";

import VaultNavBar from "../components/common/nav/vaultNavBtn";
import Username from "../components/vault/usernameDisplay/username";
import HuntDescriptor from "../components/vault/huntDescriptor/huntdescriptor";
import NftCard from "../components/vault/nftCard/nftcard";
import BottomLogo from "../components/vault/bottomLogo/bottomlogo";

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
            paddingBottom: SIZES.medium,
            paddingLeft: SIZES.xLarge,
            PaddingRight: SIZES.xLarge,
            margin: SIZES.xSmall,
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.gray,
          }}
        >
          <Username />
          <HuntDescriptor />
          <NftCard />
          <BottomLogo />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <VaultNavBar />
      </View>
    </SafeAreaView>
  );
};

export default Vault;
