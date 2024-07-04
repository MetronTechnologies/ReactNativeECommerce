import {StyleSheet} from "react-native";

export const CartScreenStyles = StyleSheet.create({
    cartMainContainer: {
        // marginTop: 55,
        flex: 1,
        backgroundColor: 'white'
    },
    subTotalContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    subTotal: {
        fontSize: 18,
        fontWeight: '400'
    },
    subTotalText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    proceedButton: {
        backgroundColor: '#FFC72C',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10
    },
    cartProductImage: {
        width: 180,
        height: 180,
        resizeMode: "contain"
    },
    cartProductMainContainer: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderBottomColor: '#F0F0F0',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0
    },
    cartProductContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cartProductTitleText: {
        // width: '100%',
        marginTop: 10
    },
    cartProductPriceText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 6
    },
    productImage: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    productDescription: {
        width: 250
    },
    cartProductDecrease: {
        backgroundColor: '#D8D8D8',
        padding: 7,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    cartProductIncrease: {
        backgroundColor: '#D8D8D8',
        padding: 7,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },
    productActionBox: {
        marginTop: 15,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    cartProductDecreaseBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 7
    },
    cartProductQuantityBox: {
        backgroundColor: 'white',
        paddingHorizontal: 18,
        paddingVertical: 6
    },
    cartDeleteSaveSee: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: '#C0C0C0',
        borderWidth: 0.6
    },
    cartSaveSeeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15
    }
});











