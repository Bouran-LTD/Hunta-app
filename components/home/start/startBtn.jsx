import React from "react";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

import styles from "./startBtn.style";
import { COLORS, FONTS, SIZES} from "../../../constants";


const StartBtn = () => {
    const router = useRouter();

    return (
        <Button style={styles.card}
            title="START HUNT"

        />
    );
};

export default StartBtn