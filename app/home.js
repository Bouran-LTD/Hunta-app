import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { Link, Stack, useRouter } from "expo-router"
import { COLORS, icons, images, SIZES} from "../constants"
import Hunt from "../components/home/hunta/hunt"
import StartBtn from "../components/home/start/startBtn"
import HuntExtra from "../components/home/huntExtra/huntExtra";
import Map from "../components/home/map/map"

const Home = () => {
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
                            style={{ width: 103, height: 24, }}
                        />
                    )
                }}
            />
        <View name="main background blue"
            style={{
            flex: 20,
            padding: SIZES.xxxxSmall,
            paddingTop: SIZES.xxxSmall,
            paddingBottom: SIZES.xxxSmall,
            margin: SIZES.large,
            marginTop: SIZES.medium,
            borderRadius: SIZES.medium,
            backgroundColor: COLORS.secondary,
            
            }}
        >
            <View name="top panel"
                style={{
                flex: 15,
                padding: SIZES.large,
                margin: SIZES.xSmall,
                borderRadius: SIZES.medium,
                backgroundColor: COLORS.gray,
                }}
            >
                <Hunt

                />  

                <HuntExtra
                
                />

                <Map
                
                />
            </View>
            
            <View name = "bottom panel"
                style={{
                flex: 1,
                padding: SIZES.large,
                margin: SIZES.xSmall,
                borderRadius: SIZES.medium,
                backgroundColor: COLORS.gray,
                }}
            >
                <StartBtn
                
                />
            </View>

        </View>

        <View style={{
            flex: 1,
        }}>

            <Text>Navigation</Text>
        </View>

        </SafeAreaView>
    );
};

export default Home;