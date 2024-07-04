import {StyleSheet} from "react-native";

export const ProfileScreenStyles = StyleSheet.create({
    headerImage: {
        width: 140,
        height: 120,
        resizeMode: 'contain'
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginRight: 12
    },
    profileMainContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white'
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    myBox: {
        padding: 10,
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        flex: 1
    },
    myBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 12
    },
    myBoxText: {
        textAlign: 'center'
    },
    profileOrderButton: {
        marginTop: 20,
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderImageContainer: {
        marginVertical: 10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileOrderContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1%',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});







