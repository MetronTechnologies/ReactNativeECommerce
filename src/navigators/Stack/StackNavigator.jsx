import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../../screens/Login/LoginScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import TabNavigator from "../Tabs/TabNavigator";
import Slider from "../../components/Slider/Slider";
import ProductInfoScreen from "../../screens/ProductInfoScreen/ProductInfoScreen";
import AddAddressScreen from "../../screens/AddAddress/AddAddressScreen";
import AddressScreen from "../../screens/Address/AddressScreen";
import ConfirmationScreen from "../../screens/Confirmation/ConfirmationScreen";
import OrderScreen from "../../screens/Order/OrderScreen";

const StackNavigator = () => {
    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen
                    name={'Login'}
                    component={LoginScreen}
                />
                <stack.Screen
                    name={'Register'}
                    component={RegisterScreen}
                    options={{
                        animation: 'slide_from_right'
                    }}
                />
                <stack.Screen
                    name={'Main'}
                    component={TabNavigator}
                    options={{
                        animation: 'slide_from_bottom'
                    }}
                />
                <stack.Screen
                    name={'ProductInfo'}
                    component={ProductInfoScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <stack.Screen
                    name={'AddAddress'}
                    component={AddAddressScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <stack.Screen
                    name={'Address'}
                    component={AddressScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <stack.Screen
                    name={'Confirmation'}
                    component={ConfirmationScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
                <stack.Screen
                    name={'Order'}
                    component={OrderScreen}
                    options={{
                        animation: 'slide_from_left'
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
