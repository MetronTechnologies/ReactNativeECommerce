import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, Pressable, SafeAreaView, Text, TextInput, ToastAndroid, View} from "react-native";
import {LoginScreenStyles} from "./LoginScreenStyles";
import InputFields from "../../components/InputFields/InputFields";
import CustomButton from "../../components/CustomButton/CustomButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../../redux/reducers/AsyncActions";
import {endClearing, startLoading} from "../../redux/reducers/CartReducer";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(
        (state) => state.cart
    );
    const clearing = user?.clearing;
    useEffect(() => {
        if(clearing === true){
            dispatch(endClearing())
        }
    }, [clearing]);
    const isFocused = useIsFocused();
    if(isFocused){
        const checkingLoginStatus = async() => {
            try{
                const token = await AsyncStorage.getItem("authToken");
                console.log("This token ---> ", token);
                if(token){
                    navigation.navigate("Main");
                }
            } catch (e) {
                console.log("Error getting login status ---> ", e)
            }
        }
        checkingLoginStatus();
    }
    // useLayoutEffect(
    //     () => {
    //
    //         checkingLoginStatus();
    //     }, []
    // )


    const styles = LoginScreenStyles;
    const token = user?.token;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const imageUrl = "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png";
    const isLoading = user?.loading;
    
    const handleLogin = async () => {
        const loginDetails = {
            email: email,
            password: password
        }
        dispatch(SignIn({loginDetails, navigation, dispatch}));
        setPassword('');
        setEmail('');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={{uri: imageUrl}}
                    alt={'login_logo'}
                    style={styles.loginHeaderImage}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.loginAvoidingView}>
                    <Text style={styles.loginHeaderText}>
                        Login to your account
                    </Text>
                </View>
                <View style={styles.loginInputContainer}>
                    <InputFields
                        iconName={'email'}
                        iconType={'material'}
                        textInputPlaceHolder={'Enter your email'}
                        onChange={(input) => setEmail(input)}
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
                </View>
                <View style={styles.loginAuthAssist}>
                    <Text>Keep me logged in</Text>
                    <Text style={styles.loginForgotPassword}>
                        Forgot Password
                    </Text>
                </View>
                <View style={styles.loginButtonGap}>
                    <CustomButton text={'Login'} action={handleLogin} loading={isLoading}/>
                </View>
                <Pressable
                    style={styles.noAccount}
                    onPress={
                        () => navigation.navigate("Register")
                    }
                >
                    <Text style={{fontSize: 18}}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;
