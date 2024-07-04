import {StyleSheet, Platform} from "react-native";


export const HomeScreenStyles = StyleSheet.create({
    container: {
        // paddingTop: Platform.OS === 'android' ? 0 : 0,
        flex: 1,
        backgroundColor: 'white'
    },
    deliveryBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        backgroundColor: '#AFEEEE'
    },
    deliveryBarText: {
        fontSize: 13,
        fontWeight: '500'
    },
    productCategory: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productCategoryBox: {
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    productCategoryName: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 5
    },
    trendingText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    trendingImages: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    trendingImagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    trendingImagesPress: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        height: 1,
        borderColor: '#D0D0D0',
        borderWidth: 2,
        marginTop: 15
    },
    todayDeals: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    todayDealsImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    todayDealsBox: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    offerTextBox: {
        backgroundColor: '#E31837',
        paddingVertical: 5,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 4
    },
    offerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    dropDown: {
        borderColor: '#B7B7B7',
        height: 30,
    },
    dropDownPicker: {
        marginHorizontal: 10,
        marginTop: 20,
        width: '45%',
    },
    modalContent: {
        width: '100%',
        height: 400
    },
    modalContentChooseText: {
        fontSize: 16,
        fontWeight: '500'
    },
    modalContentSelectText: {
        marginTop: 5,
        fontSize: 16,
        color: 'gray'
    },
    modalContentAddAddress: {
        width: 140,
        height: 140,
        borderColor: '#D0D0D0',
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    modalContentAddressText: {
        textAlign: "center",
        color: '#0066B2',
        fontWeight: '500'
    },
    modalLocationContainer: {
        flexDirection: 'column',
        gap: 7,
        marginBottom: 30
    },
    modalLocationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    modalLocationText: {
        color: '#0066B2',
        fontWeight: '200'
    },
    modalAddressContainer: {
        width: 140,
        height: 140,
        borderColor: '#D0D0D0',
        borderWidth: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        gap: 3,
        marginRight: 15,
        marginTop: 10
    },
    modalAddressNameBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    modalAddressNameText: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    modalAddressText: {
        fontSize: 13,
        width: 130,
        textAlign: 'center'
    },
});








