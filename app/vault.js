import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import VaultNavBar from "../components/common/nav/vaultNavBtn";

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
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>

      <View style={{ flex: 1 }}>
        <VaultNavBar />
      </View>
    </SafeAreaView>
  );
};

export default Vault;
