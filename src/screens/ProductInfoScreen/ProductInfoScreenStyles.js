import {StyleSheet} from "react-native";

export const ProductInfoScreenStyles = StyleSheet.create({
    infoMainContainer: {
        // marginTop: 45,
        flex: 1,
        backgroundColor: 'white'
    },
    imageBackGround: {
        marginTop: 25,
        resizeMode: 'contain'
    },
    infoDiscountContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#C60C30',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    infoDiscountText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 12
    },
    infoDiscountMainContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoContainer: {
        padding: 10
    },
    infoContainerTitle: {
        fontSize: 15,
        fontWeight: '500'
    },
    infoDiscountPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 6
    },
    divider: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 1
    },
    infoColorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    infoColorText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    infoTotal: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5
    },
    infoLocationContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        gap: 5
    },
    infoLocationText: {
        fontSize: 15,
        fontWeight: '500'
    },
    inStock: {
        marginHorizontal: 10,
        color: 'green',
        fontWeight: '500'
    }
});







