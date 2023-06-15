import React from "react";
import { useRouter } from "expo-router";
import { View, Image, Touc } from "react-native";

/*THIS DOESNT CHANGE WE JUST USE THIS FOR CAPTURE REF */

import UsernameSharable from "./usernamesharable";
import NftCard from "../nftCard/nftcard";
import HuntDescriptor from "../huntDescriptor/huntdescriptor";
import BottomLogo from "../bottomLogo/bottomLogo";

import { COLORS, icons, images, SIZES } from "../../../constants/index";

const SharedComp = () => {
  const router = useRouter();

  return (
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
      <UsernameSharable />
      <HuntDescriptor />
      <NftCard />
      <BottomLogo />
      // Notes : sharedcomp will not be displayed and it will have its own
      username so that we can include the share button
    </View>
  );
};

export default SharedComp;
