import {StyleSheet} from "react-native";

export const ProductItemStyles = StyleSheet.create({
    itemImage: {
        width: 200,
        height: 200
    },
    itemContainer: {
        marginHorizontal: 20,
        marginVertical: 25,
        resizeMode: 'contain'
    },
    itemText: {
        width: 150,
        marginTop: 10
    },
    priceRatingContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    ratingText: {
        color: '#FFC72C',
        fontWeight: 'bold'
    },
    itemCartAdder: {
        backgroundColor: '#FFC72c',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10
    }
});