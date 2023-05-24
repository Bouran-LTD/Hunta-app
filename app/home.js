import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router"
import { COLORS, icons, images, SIZES} from "../constants"

export default function Home() {
    const router= useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.primary }, 
                    headerTitle: " ", 
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Image 
                            source={images.logo} 
                            style={{ width: 103, height: 24 }}
                        />
                    )
                }}
            />
        <View
            style={{
            flex: 1,
            padding: SIZES.medium
            }}
        >
            <Hunt
            
            />

            <HuntExtra

            />

            <Map

            />

            <Start 

            />
        </View>

        </SafeAreaView>
    );
};