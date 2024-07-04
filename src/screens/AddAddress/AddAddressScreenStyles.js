import {StyleSheet} from "react-native";

export const AddAddressScreenStyles = StyleSheet.create({
    newAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        borderColor: '#B0B0B0',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingVertical: 7,
        paddingHorizontal: 5
    },
    addressContainer: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        padding: 10,
        flexDirection: 'column',
        gap: 5,
        marginVertical: 10
    },
    addressNameBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    addressNameText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    addressText: {
        fontSize: 15,
        color: '#181818'
    },
    addressButton: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 0.9,
        borderColor: '#D0D0D0'
    },
    addressButtonContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
        marginTop: 7
    }
});











