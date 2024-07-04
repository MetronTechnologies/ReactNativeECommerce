import {StyleSheet} from "react-native";

export const ConfirmationScreenStyles = StyleSheet.create({
    stepContainer: {
        flex: 1,
        height: 2,
        backgroundColor: 'green'
    },
    stepBox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    stepMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    stepTitle: {
        textAlign: 'center',
        marginTop: 8
    },
    stepContainerBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepZeroMainContainer: {
        marginHorizontal: 20,
    },
    stepZeroText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    confirmationAddressMain: {
        borderWidth: 1.5,
        borderColor: '#D0D0D0',
        padding: 10,
        flexDirection: 'row',
        gap: 5,
        paddingBottom: 17,
        paddingLeft: 20,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    confirmationAddressBox: {
        marginLeft: 20,
        width: '75%'
    },
    confirmationAddressNameBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    confirmationAddressNameText: {
        fontSize: 20,
        fontWeight: '800'
    },
    confirmationAddressText: {
        fontSize: 15,
        color: '#181818'
    },
    confirmationAddressButton: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 0.9,
        borderColor: '#D0D0D0'
    },
    confirmationAddressButtonContainer: {
        flexDirection: "row",
        alignItems: 'center',
        // gap: 10,
        marginTop: 7,
        width: '100%',
        justifyContent: 'space-between'
    },
    deliveryDestinationContainer: {
        // borderWidth: 1,
        // width: 300
    },
    deliveryDestinationBox: {
        backgroundColor: '#008397',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    deliveryDestinationText: {
        textAlign: 'center',
        color: 'white'
    },
    stepTwoText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    stepTwoTime: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        gap: 7,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 10
    },
    stepContinue: {
        backgroundColor: '#FFC72C',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    stepThreePaymentMethodText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    paymentMethodBox: {
        backgroundColor: 'white',
        padding: 8,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        marginTop: 12
    },
    cashOrderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cashOrderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 0,
        backgroundColor: 'white',
        padding: 8,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 10
    },
    cashAutoDelivery: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5
    },
    cashShippingAddressName: {
        backgroundColor: 'white',
        padding: 8,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 10
    },
    cashItemTotalBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    cashItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray'
    },
    cashItemTotal: {
        color: 'gray',
        fontSize: 16,
    },
    cashOrderTotal: {
        fontSize: 20,
        fontWeight: '500',
    },
    cashOrderTotalText: {
        color: '#C60C30',
        fontSize: 17,
        fontWeight: 'bold'
    },
    cashPayWithBox: {
        backgroundColor: 'white',
        padding: 8,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        marginTop: 10
    },
    cashPayWith: {
        fontSize: 16,
        color: 'gray'
    },
    payWithCash: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 7
    },
    cashPlaceOrderBox: {
        backgroundColor: '#FFC72C',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});








