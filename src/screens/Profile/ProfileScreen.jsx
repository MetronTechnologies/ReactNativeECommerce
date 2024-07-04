import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, Image, ToastAndroid, ScrollView, Pressable, FlatList} from "react-native";
import {ProfileScreenStyles} from "./ProfileScreenStyles";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import axios from "axios";
import {cleanCart, saveUser} from "../../redux/reducers/CartReducer";
import {UserType} from "../../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ProductCategories} from "../../data/ProductCategories";
import {jwtDecode} from "jwt-decode";
import {useDispatch, useSelector} from "react-redux";
import {testOrders} from "../../data/testOrders";

const ProfileScreen = () => {
    const styles = ProfileScreenStyles;
    const navigation = useNavigation();
    const [user, setUser] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const userProfile = useSelector(
        (state) => state.cart.userProfile
    )
    const dispatch = useDispatch();

    const logout = () => {
        clearAuthToken();
    }
    const clearAuthToken = async () => {
        await AsyncStorage.removeItem("authToken");
        navigation.navigate("Login")
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#00CED1'
            },
            headerLeft: () => (
                <Image
                    style={styles.headerImage}
                    source={{uri: 'https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png'}}
                />
            ),
            headerRight: () => (
                <View style={styles.headerView}>
                    <Ionicons
                        name={'notifications-outline'}
                        size={24}
                        color={'black'}
                    />
                    <AntDesign
                        name={'search1'}
                        size={24}
                        color={'black'}
                    />
                </View>
            )
        })
    }, []);
    const [userId, setUserId] = useState(userProfile?.id);
    useEffect(() => {
        console.log('User Profile ---> ', userProfile)
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
    useEffect(() => {
        fetchUserProfile();
        getMyOrders();
        console.log(orders)
    }, [userId]);


    const fetchUserProfile = async () => {
        console.log("A user id for profile ---> ", userId)
        await axios
            .get(`http://192.168.43.230:8000/profile/get-profile/${userId}/${userProfile.email}`)
            .then(
                (response) => {
                    const {user} = response.data;
                    console.log(user)
                    setUser(user)
                }
            )
            .catch(
                (response) => {
                    console.log("Error while getting profile", response);
                }
            )
    }

    const getMyOrders = async () => {
        await axios
            .get(`http://192.168.43.230:8000/order/get-orders/${userId}/${userProfile.email}`)
            .then(
                (response) => {
                    const userOrders = response.data.orders;
                    userOrders?.map(
                        (order) => {
                            setProducts(order.products[0])
                        }
                    )
                    setOrders(userOrders)
                    setLoading(false)
                }
            )
            .catch(
                (response) => {

                    console.log("Error while fetching orders", response);
                }
            )
    }
    return (
        <ScrollView style={styles.profileMainContainer}>
            <Text style={styles.welcomeText}>
                Welcome {user.name}
            </Text>
            <View style={styles.myBoxContainer}>
                <Pressable
                    style={styles.myBox}
                >
                    <Text style={styles.myBoxText}>My Orders</Text>
                </Pressable>
                <Pressable style={styles.myBox}>
                    <Text style={styles.myBoxText}>My Account</Text>
                </Pressable>
            </View>
            <View style={styles.myBoxContainer}>
                <Pressable style={styles.myBox}>
                    <Text style={styles.myBoxText}>Buy Again</Text>
                </Pressable>
                <Pressable
                    style={styles.myBox}
                    onPress={logout}
                >
                    <Text style={styles.myBoxText}>Logout</Text>
                </Pressable>
            </View>
            <View style={styles.profileOrderContainer}>
                {
                    orders.map(
                        (order, index) => (
                            order.products.map(
                                (product, index) => (
                                    <View style={styles.orderImageContainer} key={index}>
                                        <Image
                                            source={{uri: product.image}}
                                            style={{width: 200, height: 200, resizeMode: 'contain'}}
                                        />
                                    </View>
                                )
                            )
                        )
                    )
                }
            </View>
            {/*<FlatList*/}
            {/*    bounces={false}*/}
            {/*    data={orders}*/}
            {/*    keyExtractor={*/}
            {/*        (item) => item.id*/}
            {/*    }*/}
            {/*    showsHorizontalScrollIndicator={false}*/}
            {/*    ListEmptyComponent={*/}
            {/*        <Text>No Orders Found</Text>*/}
            {/*    }*/}
            {/*    renderItem={*/}
            {/*        (order, index) => (*/}
            {/*            <Pressable key={index} style={styles.profileOrderButton}>*/}
            {/*                {*/}
            {/*                    products?.map(*/}
            {/*                        (product, index) => {*/}
            {/*                            return (*/}
            {/*                                <View style={styles.orderImageContainer} key={index}>*/}
            {/*                                    <Image*/}
            {/*                                        source={{uri: product.image}}*/}
            {/*                                        style={{width: 100, height: 100, resizeMode: 'contain'}}*/}
            {/*                                    />*/}
            {/*                                </View>*/}
            {/*                            )*/}
            {/*                        }*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </Pressable>*/}
            {/*        )*/}
            {/*    }*/}
            {/*/>*/}
        </ScrollView>
    );
};

export default ProfileScreen;
