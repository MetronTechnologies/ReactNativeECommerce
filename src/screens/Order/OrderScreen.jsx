import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from "react-native";
import {OrderScreenStyles} from "./OrderScreenStyles";
import {useNavigation} from "@react-navigation/native";
import LottieView from "lottie-react-native";

const OrderScreen = () => {
    const styles = OrderScreenStyles;
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(
            () => {
                navigation.navigate('Main')
            }, 2300
        )
    }, []);
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <LottieView
                source={require("../../assets/thumbs.json")}
                style={styles.lottieThumbs}
                autoPlay
                loop={false}
                speed={0.7}
            />
            <Text style={styles.orderReceivedText}>
                Your Order has been received
            </Text>
            <LottieView
                source={require("../../assets/sparkle.json")}
                style={styles.lottieSparkles}
                autoPlay
                loop={false}
                speed={0.7}
            />
        </SafeAreaView>
    );
};

export default OrderScreen;
