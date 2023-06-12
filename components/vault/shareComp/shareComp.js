import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

import Username from "../usernameDisplay/username";
import HuntDescriptor from "../huntDescriptor/huntdescriptor";
import NftCard from "../nftCard/nftcard";
import BottomLogo from "../bottomLogo/bottomLogo";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const ShareComp = () => {
  const router = useRouter();

  return (
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
      <Username />
      <HuntDescriptor />
      <NftCard />
      <BottomLogo />
    </View>
  );
};

export default ShareComp;