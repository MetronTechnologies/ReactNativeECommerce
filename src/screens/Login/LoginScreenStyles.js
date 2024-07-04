import {StyleSheet} from "react-native";

export const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginHeaderImage: {
        width: 150,
        height: 100
    },
    loginHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 12,
        color: '#041E42'
    },
    loginAvoidingView: {
        alignItems: "center"
    },
    loginInputContainer: {
        display: 'flex',
        marginTop: 70,
        flexDirection: "column",
        gap: 20,
        alignItems: 'center',
        maxWidth: '85%',
    },
    loginAuthAssist: {
        display: 'flex',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginForgotPassword: {
        color: '#007FFF',
        fontWeight: '500'
    },
    loginButtonGap: {
        marginTop: 80,
        display: 'flex',
        alignItems: "center",
    },
    noAccount: {
        textAlign: 'center',
        marginTop: 50,
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});