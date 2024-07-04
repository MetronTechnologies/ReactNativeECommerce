import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, View, Text, Pressable, ToastAndroid, Alert} from "react-native";
import {ConfirmationScreenStyles} from "./ConfirmationScreenStyles";
import {ConfirmationSteps} from "../../data/ConfirmationSteps";
import axios from "axios";
import {UserType} from "../../UserContext";
import {Entypo, FontAwesome5, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {testaddress} from "../../data/testaddress";
import {useDispatch, useSelector} from "react-redux";
import order from "../../api/models/order";
import {useNavigation} from "@react-navigation/native";
import {cleanCart} from "../../redux/reducers/CartReducer";
import RazorpayCheckout from "react-native-razorpay";
import jwt_decode, {jwtDecode} from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmationScreen = () => {
    const styles = ConfirmationScreenStyles;
    const [currentStep, setCurrentStep] = useState(0);
    const [addresses, setAddresses] = useState(testaddress);
    const [selectedAddress, setSelectedAddress] = useState("");
    const {userId, setUserId} = useContext(UserType);
    const [deliveryOptions, setDeliveryOptions] = useState(false);
    const cart = useSelector(
        (state) => state.cart.cart
    );

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const total = cart?.map(
        (item) => item.price * item.quantity
    ).reduce(
        (x, y) => x+y, 0
    );
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
    useEffect(() => {
        fetchAddresses();
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem('authToken');
            console.log("A Token ---> ", token)
            const decodedToken = jwtDecode(token);
            console.log("decoded token ---> ", decodedToken)
            const userId = decodedToken.id;
            setUserId(userId);
        }
        fetchUser();
    }, []);
    // useEffect(async () => {
    //
    //     const token = await AsyncStorage.getItem('authToken');
    //     console.log("Token ---> ", token)
    //     const decodedToken = jwt_decode(token);
    //     console.log("decoded token ---> ", decodedToken)
    //     const userId = decodedToken.userId;
    // }, []);
    const handlePlaceOrder = async () => {
        try {
            const orderData = {
                userId: userId,
                cartItem: cart,
                totalPrice: total,
                shippingAddress: selectedAddress,
                paymentMethod: selectedPaymentMethod
            }
            console.log("order data ---> ", orderData)
            await axios
                .post(`http://192.168.43.230:8000/order/create`, orderData)
                .then(
                    (response) => {
                        const {data} = response;
                        const reply = data.message;
                        ToastAndroid.showWithGravity(
                            reply,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM
                        );
                        dispatch(cleanCart());
                        navigation.navigate('Order')
                    }
                )
                .catch(
                    (response) => {
                        ToastAndroid.showWithGravity(
                            "An error occurred while adding address",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                        console.log("Error while updating address", response);
                    }
                )
        } catch (e) {
            console.log("Error placing order ---> ", e);
        }
    }
    
    const pay = async () => {
        try{
            const options = {
                description: 'Adding To Wallet',
                currency: 'USD',
                name: 'Amazon',
                key: '',
                amount: total * 100,
                prefill: {
                    email: 'void@razorpay.com',
                    contact: '09000022234',
                    name: 'Razor Software'
                },
                theme: {
                    color: '#F37254'
                }
            }

            const data = await RazorpayCheckout.open(options);
            const orderData = {
                userId: userId,
                cartItem: cart,
                totalPrice: total,
                shippingAddress: selectedAddress,
                paymentMethod: selectedPaymentMethod
            }
            await axios
                .post(`http://192.168.43.230:8000/order/create`, orderData)
                .then(
                    (response) => {
                        const {data} = response;
                        const reply = data.message;
                        ToastAndroid.showWithGravity(
                            reply,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM
                        );
                        dispatch(cleanCart());
                        navigation.navigate('Order')
                    }
                )
                .catch(
                    (response) => {
                        ToastAndroid.showWithGravity(
                            "An error occurred while adding address",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                        console.log("Error while updating address", response);
                    }
                )
        } catch (e) {
            console.log("Couldn't pay online ", e)
        }
    }
    
    const fetchAddresses = async() => {
        try{
            const response = await axios
                .get(`http://192.168.43.230:8000/location/getAll/${userId}`)
                .then(
                    (response) => {
                        const {data} = response;
                        setAddresses(data)
                    }
                )
                .catch(
                    (response) => {
                        console.log("Error while getting addresses", response);
                    }
                )

        } catch (e) {
            console.log("Error fetching addresses ", e);
        }
    }
    return (
        <ScrollView>
            <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 10}}>
                <View style={styles.stepMainContainer}>
                    {
                        ConfirmationSteps.map(
                            (step, index) => (
                                <View style={styles.stepContainerBox} key={index}>
                                    {
                                        index > 0 && (
                                            <View
                                                style={[
                                                    styles.stepContainer,
                                                    index === currentStep && {
                                                        backgroundColor: "green"
                                                    }
                                                ]}
                                            />
                                        )
                                    }
                                    <View
                                        style={[
                                            styles.stepBox,
                                            index < currentStep && {
                                                backgroundColor: 'green'
                                            }
                                        ]}
                                    >
                                        {
                                            index < currentStep ? (
                                                <Text style={styles.stepText}>
                                                    &#10003;
                                                </Text>
                                            ) : (
                                                <Text style={styles.stepText}>
                                                    {index + 1}
                                                </Text>
                                            )
                                        }
                                    </View>
                                    <Text style={styles.stepTitle}>
                                        {step.title}
                                    </Text>
                                </View>
                            )
                        )
                    }
                </View>
            </View>
            {
                currentStep === 0 && (
                    <View style={styles.stepZeroMainContainer}>
                        <Text style={styles.stepZeroText}>
                            Select Delivery Address
                        </Text>
                        <View>
                            {
                                addresses?.map(
                                    (address, index) => (
                                        <Pressable
                                            style={styles.confirmationAddressMain}
                                            key={index}
                                        >
                                            {
                                                selectedAddress === address ? (
                                                    <FontAwesome5
                                                        size={20}
                                                        color={'#008397'}
                                                        name={'dot-circle'}
                                                    />
                                                ) : (
                                                    <Entypo
                                                        size={20}
                                                        color={'gray'}
                                                        name={'circle'}
                                                        onPress={() => {
                                                            setSelectedAddress(address)
                                                        }}
                                                    />
                                                )
                                            }
                                            <View style={styles.confirmationAddressBox}>
                                                <View style={styles.confirmationAddressNameBox}>
                                                    <Text style={styles.confirmationAddressNameText}>
                                                        {address?.name}
                                                    </Text>
                                                    <Entypo
                                                        name={'location-pin'}
                                                        size={20}
                                                        color={'red'}
                                                    />
                                                </View>
                                                <Text style={styles.confirmationAddressText}>
                                                    {address?.houseNo}, {address?.landmark}
                                                </Text>
                                                <Text style={styles.confirmationAddressText}>
                                                    {address?.street}
                                                </Text>
                                                <Text style={styles.confirmationAddressText}>
                                                    {address?.city}, {address?.country}
                                                </Text>
                                                <Text style={styles.confirmationAddressText}>
                                                    {address?.mobileNo}
                                                </Text>
                                                <Text style={styles.confirmationAddressText}>
                                                    {address?.postalCode}
                                                </Text>
                                                <View style={styles.confirmationAddressButtonContainer}>
                                                    <Pressable style={styles.confirmationAddressButton}>
                                                        <Text>Edit</Text>
                                                    </Pressable>
                                                    <Pressable style={styles.confirmationAddressButton}>
                                                        <Text>Remove</Text>
                                                    </Pressable>
                                                    <Pressable style={styles.confirmationAddressButton}>
                                                        <Text>Set as default</Text>
                                                    </Pressable>
                                                </View>
                                                <View style={styles.deliveryDestinationContainer}>
                                                    {
                                                        selectedAddress && selectedAddress._id === address?._id && (
                                                            <Pressable
                                                                style={styles.deliveryDestinationBox}
                                                                onPress={() => setCurrentStep(1)}
                                                            >
                                                                <Text style={styles.deliveryDestinationText}>
                                                                    Deliver to this address
                                                                </Text>
                                                            </Pressable>
                                                        )
                                                    }
                                                </View>
                                            </View>
                                        </Pressable>
                                    )
                                )
                            }
                        </View>
                    </View>
                )
            }
            {
                currentStep === 1 && (
                    <View style={{marginHorizontal: 20}}>
                        <Text style={styles.stepTwoText}>
                            Choose your delivery options
                        </Text>
                        <View style={styles.stepTwoTime}>
                            {
                                deliveryOptions ? (
                                    <FontAwesome5
                                        name={'dot-circle'}
                                        size={20}
                                        color={'gray'}
                                        onPress={() => setDeliveryOptions(!deliveryOptions)}
                                    />
                                ) : (
                                    <Entypo
                                        name={'circle'}
                                        size={20}
                                        color={'gray'}
                                        onPress={() => setDeliveryOptions(!deliveryOptions)}
                                    />
                                )
                            }

                            <Text style={{flex: 1}}>
                                <Text style={{color: 'green', fontWeight: '500'}}>
                                    Tomorrow by 10pm
                                </Text>
                                {" "} - FREE delivery with your prime membership
                            </Text>
                        </View>
                        {
                            deliveryOptions && (
                                <Pressable
                                    onPress={() => setCurrentStep(2)}
                                    style={styles.stepContinue}
                                >
                                    <Text>Continue</Text>
                                </Pressable>
                            )
                        }
                    </View>
                )
            }
            {
                currentStep === 2 && (
                    <View style={{marginHorizontal: 20}}>
                        <Text style={styles.stepThreePaymentMethodText}>
                            Select your payment method
                        </Text>
                        <View style={styles.paymentMethodBox}>
                            {
                                selectedPaymentMethod === 'cash' ? (
                                    <FontAwesome5
                                        name={'dot-circle'}
                                        size={20}
                                        color={'#008397'}
                                    />
                                ) : (
                                    <Entypo
                                        name={'circle'}
                                        size={20}
                                        color={'gray'}
                                        onPress={() => setSelectedPaymentMethod('cash')}
                                    />
                                )
                            }
                            <Text>
                                Cash on delivery
                            </Text>
                        </View>
                        <View style={styles.paymentMethodBox}>
                            {
                                selectedPaymentMethod === 'card' ? (
                                    <FontAwesome5
                                        name={'dot-circle'}
                                        size={20}
                                        color={'#008397'}
                                    />
                                ) : (
                                    <Entypo
                                        name={'circle'}
                                        size={20}
                                        color={'gray'}
                                        onPress={() => {
                                            setSelectedPaymentMethod('card');
                                            Alert.alert(
                                                'UPI/Debit Card',
                                                'Pay Online',[
                                                    {
                                                        text: 'Cancel',
                                                    },
                                                    {
                                                        text: 'OK',
                                                        onPress: () => pay()
                                                    }
                                                ]
                                            )
                                        }}
                                    />
                                )
                            }
                            <Text>
                                UPI / Credit or debit card
                            </Text>
                        </View>
                        {
                            (selectedPaymentMethod === 'card' || selectedPaymentMethod === 'cash') && (
                                <Pressable
                                    onPress={() => setCurrentStep(3)}
                                    style={styles.stepContinue}
                                >
                                    <Text>Continue</Text>
                                </Pressable>
                            )
                        }
                    </View>
                )
            }
            {
                currentStep === 3 && selectedPaymentMethod === 'cash' && (
                    <View style={{marginHorizontal: 20}}>
                        <Text style={styles.cashOrderText}>
                            Order Now
                        </Text>
                        <View style={styles.cashOrderContainer}>
                            <View>
                                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                                    Save 5% and never run out
                                </Text>
                                <Text style={styles.cashAutoDelivery}>
                                    Turn on auto deliveries
                                </Text>
                            </View>
                            <MaterialIcons
                                name={'keyboard-arrow-right'}
                                size={24}
                                color={'black'}
                            />
                        </View>
                        <View style={styles.cashShippingAddressName}>
                            <Text>Shipping to {selectedAddress.name}</Text>
                            <View style={styles.cashItemTotalBox}>
                                <Text style={styles.cashItemText}>Items</Text>
                                <Text style={styles.cashItemTotal}>${total}</Text>
                            </View>
                            <View style={styles.cashItemTotalBox}>
                                <Text style={styles.cashItemText}>Delivery</Text>
                                <Text style={styles.cashItemTotal}>$0</Text>
                            </View>
                            <View style={styles.cashItemTotalBox}>
                                <Text style={styles.cashOrderTotal}>Order Total</Text>
                                <Text style={styles.cashOrderTotalText}>${total}</Text>
                            </View>
                        </View>
                        <View style={styles.cashPayWithBox}>
                            <Text style={styles.cashPayWith}>Pay With</Text>
                            <Text style={styles.payWithCash}>Pay on Delivery (Cash)</Text>
                        </View>
                        <Pressable
                            style={styles.cashPlaceOrderBox}
                            onPress={handlePlaceOrder}
                        >
                            <Text>Place your order</Text>
                        </Pressable>
                    </View>
                )
            }
        </ScrollView>
    );
};

export default ConfirmationScreen;
