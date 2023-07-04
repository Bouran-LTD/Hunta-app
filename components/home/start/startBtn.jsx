import React from "react";
import { useRouter } from "expo-router";
import { Pressable , Text } from "react-native";

import styles from "./startBtn.styles";

const StartBtn = () => {
    const router = useRouter();

    return (
        <Pressable style={styles.button}>
            <Text style={styles.text} > 
                START HUNT
            </Text>
        </Pressable>
    );
};

export default StartBtn