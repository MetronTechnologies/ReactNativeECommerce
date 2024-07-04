import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, register} from "../../ServiceApis";
import {ToastAndroid} from "react-native";
import {jwtDecode} from "jwt-decode";
import {saveUser} from "./CartReducer";


export const SignIn = createAsyncThunk("UserSlice/signIn", async ({loginDetails, navigation, dispatch}, thunkApi) => {
        try {
            console.log("Currently here")
            console.log("Login details ---> ", loginDetails)
            const {data} = await login(loginDetails);
            if (data) {
                console.log("Data ---> ", data)
                const decodedToken = jwtDecode(data.token);
                console.log("Decoded token ---> ", decodedToken);
                dispatch(saveUser(decodedToken));
                navigation.navigate('Main');
                ToastAndroid.showWithGravity(
                    'Welcome',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
            }
            return data.token;
        } catch (error) {
            console.log("Error logging in ", error);
        }
    }
)

export const SignUp = createAsyncThunk("UserSlice/signUp", async (registrationDetails, thunkApi) => {
        try {
            console.log("Currently here")
            console.log("Login details ---> ", registrationDetails)
            const {data} = await register(registrationDetails);
            return data.token;
        } catch (error) {
            console.log("Error logging in ", error);
        }
    }
)





