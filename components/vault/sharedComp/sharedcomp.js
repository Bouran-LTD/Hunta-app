import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { captureRef, ViewShot } from "react-native-view-shot";
import { Platform } from "react-native";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

/*THIS DOESNT CHANGE WE JUST USE THIS FOR CAPTURE REF */

import UsernameSharable from "./usernamesharable";
import NftCard from "../nftCard/nftcard";
import HuntDescriptor from "../huntDescriptor/huntdescriptor";
import BottomLogo from "../bottomLogo/bottomLogo";

import { COLORS, SIZES } from "../../../constants/index";

const SharedComp = () => {
  const sharableRef = useRef();
  const router = useRouter();

  const captureAndShare = async () => {
    try {
      const result = await captureRef(sharableRef, {
        format: "png",
        quality: 0.8,
        result: "tmpfile",
      });

      if (result) {
        const asset = await MediaLibrary.createAssetAsync(result);
        await Sharing.shareAsync(asset.uri);
      }
    } catch (error) {
      console.error("Error capturing and sharing:", error);
    }
  };

  return (
    <ViewShot ref={sharableRef}>
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
        /* Notes : sharedcomp will not be displayed and it will have its own
        username so that we can include the share button
      </View>
    </ViewShot>
  );
};

export default SharedComp;
