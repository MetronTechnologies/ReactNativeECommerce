import {StyleSheet} from "react-native";

export const SliderStyles = StyleSheet.create({
    sliderContainer: {
        // flex: 1,
    },
    sliderImage: {
        height: 250
    },
    slideIndicatorContainer: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 5
    },
    indicatorRing: {
        width: 20,
        height: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 1000,
        // backgroundColor: 'rgb(75 85 99 1)'
        backgroundColor: 'black'
    },
    arrowContainer: {
        display: "flex",
        height: 50,
        width: '100%',
        position: "absolute",
        top: 250/2 - 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
    }
});