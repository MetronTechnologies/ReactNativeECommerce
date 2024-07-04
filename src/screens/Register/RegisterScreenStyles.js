import {StyleSheet} from "react-native";

export const RegisterScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerHeaderImage: {
        width: 150,
        height: 100
    },
    registerHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        color: '#041E42'
    },
    registerAvoidingView: {
        alignItems: "center"
    },
    registerInputContainer: {
        marginTop: 70,
        flexDirection: "column",
        gap: 20,
        alignItems: 'center',
        maxWidth: '85%'
    },
    registerAuthAssist: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    registerForgotPassword: {
        color: '#007FFF',
        fontWeight: '500'
    },
    registerButtonGap: {
        marginTop: 80,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    noAccount: {
        textAlign: 'center',
        marginTop: 50,
        color: 'gray',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});