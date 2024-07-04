import React, {useState} from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    ToastAndroid,
    View
} from "react-native";
import {RegisterScreenStyles} from "./RegisterScreenStyles";
import InputFields from "../../components/InputFields/InputFields";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import {useDispatch} from "react-redux";

const RegisterScreen = () => {
    const styles = RegisterScreenStyles;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [clearing, setClearing] = useState(false);
    const dispatch = useDispatch();
    const handleRegister = async () => {
        setIsLoading(true);
        const user = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log("user ---> ", user);
        dispatch()
        // axios
        //     .post("http://192.168.43.230:8000/auth/signup", user)
        //     .then(
        //         (response) => {
        //             const {data} = response;
        //             const reply = data.message;
        //             ToastAndroid.showWithGravity(
        //                 reply,
        //                 ToastAndroid.LONG,
        //                 ToastAndroid.BOTTOM
        //             );
        //             setIsLoading(false);
        //             setClearing(true);
        //             setName('');
        //             setEmail('');
        //             setPassword('');
        //             setConfirmPassword('');
        //         }
        //     )
        //     .catch(
        //         (response) => {
        //             ToastAndroid.showWithGravity(
        //                 "An error occurred while registering",
        //                 ToastAndroid.SHORT,
        //                 ToastAndroid.BOTTOM
        //             );
        //             console.log("Error while registering", response);
        //         }
        //     )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                    style={styles.registerHeaderImage}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.registerAvoidingView}>
                    <Text style={styles.registerHeaderText}>
                        Register an account
                    </Text>
                </View>
                <View style={styles.registerInputContainer}>
                    <InputFields
                        iconName={'person'}
                        iconType={'ion'}
                        textInputPlaceHolder={'Enter your name'}
                        onChange={(x) => setName(x)}
                        isSecured={false}
                        clear={clearing}
                    />
                    <InputFields
                        iconName={'email'}
                        iconType={'material'}
                        textInputPlaceHolder={'Enter your email'}
                        onChange={(x) => setEmail(x)}
                        isSecured={false}
                        clear={clearing}
                    />
                    <InputFields
                        iconName={'lock1'}
                        iconType={'ant'}
                        textInputPlaceHolder={'Enter your password'}
                        onChange={(input) => setPassword(input)}
                        isSecured={true}
                        clear={clearing}
                    />
                    <InputFields
                        iconName={'lock1'}
                        iconType={'ant'}
                        textInputPlaceHolder={'Confirm your password'}
                        onChange={(input) => setConfirmPassword(input)}
                        isSecured={true}
                        clear={clearing}
                    />
                </View>
                <View style={styles.registerButtonGap}>
                    <CustomButton text={'Register'} action={handleRegister} loading={isLoading}/>
                </View>
                <Pressable
                    style={styles.noAccount}
                    onPress={
                        () => navigation.navigate("Login")
                    }
                >
                    <Text style={{fontSize: 18}}>
                        Already have an account? Sign In
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
