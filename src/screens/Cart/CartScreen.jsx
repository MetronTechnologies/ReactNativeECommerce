import React from 'react';
import {View, Text, ScrollView, Pressable, Image} from "react-native";
import {CartScreenStyles} from "./CartScreenStyles";
import Header from "../../components/Header/Header";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {decrementQuantity, incrementQuantity, removeFromCart} from "../../redux/reducers/CartReducer";
import {useNavigation} from "@react-navigation/native";

const CartScreen = () => {
    const styles = CartScreenStyles;
    const navigation = useNavigation();
    const cart = useSelector(
        (state) => state.cart.cart
    );
    const total = cart?.map(
        (item) => item.price * item.quantity
    ).reduce(
        (x, y) => x+y, 0
    );
    const dispatch = useDispatch();
    const increaseQuantity = (item) => {
        dispatch(incrementQuantity(item));
    }
    const decreaseQuantity = (item) => {
        dispatch(decrementQuantity(item));
    }
    const deleteItem = (item) => {
        dispatch(removeFromCart(item));
    }
    return (
        <ScrollView style={styles.cartMainContainer}>
            <Header />
            <View style={styles.subTotalContainer}>
                <Text style={styles.subTotal}>SubTotal: </Text>
                <Text style={styles.subTotalText}>${total}</Text>
            </View>
            <Text style={{paddingLeft: 20}}>EMI Details Available</Text>
            {
                cart.length > 0 && (
                    <Pressable
                        style={styles.proceedButton}
                        onPress={
                            () => navigation.navigate('Confirmation')
                        }
                    >
                        <Text>Proceed to buy {cart.length} items</Text>
                    </Pressable>
                )
            }

            <View style={styles.divider} />
            <View style={{marginHorizontal: 10}}>
                {
                    cart?.map(
                        (item, index) => (
                            <View key={index} style={styles.cartProductMainContainer}>
                                <Pressable style={styles.cartProductContainer}>
                                    <View>
                                        <Image
                                            source={{uri: item?.image}}
                                            style={styles.cartProductImage}
                                        />
                                    </View>
                                    <View style={styles.productDescription}>
                                        <Text
                                            numberOfLines={3}
                                            style={styles.cartProductTitleText}
                                        >
                                            {item?.title}
                                        </Text>
                                        <Text style={styles.cartProductPriceText}>
                                            ${item?.price}
                                        </Text>
                                        <Image
                                            style={styles.productImage}
                                            source={{
                                                uri: "https://assets.stickpng.com/thumbs/5f4924cc68ecc70004ae7065.png",
                                            }}
                                        />
                                        <Text style={{color: 'green'}}>In Stock</Text>
                                        <Text style={{fontWeight: '500', marginTop: 6}}>
                                            {item?.rating?.rate} ratings
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style={styles.productActionBox}>
                                    <View style={styles.cartProductDecreaseBox}>
                                        {
                                            item.quantity > 1 ? (
                                                <Pressable
                                                    style={styles.cartProductDecrease}
                                                    onPress={() => decreaseQuantity(item)}
                                                >
                                                    <AntDesign
                                                        name={'minus'}
                                                        size={24}
                                                        color={'black'}
                                                    />
                                                </Pressable>
                                            ) : (
                                                <Pressable
                                                    style={styles.cartProductDecrease}
                                                    onPress={() => deleteItem(item)}
                                                >
                                                    <AntDesign
                                                        name={'delete'}
                                                        size={24}
                                                        color={'black'}
                                                    />
                                                </Pressable>
                                            )
                                        }
                                        <Pressable style={styles.cartProductQuantityBox}>
                                            <Text>
                                                {item?.quantity}
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={styles.cartProductIncrease}
                                            onPress={() => increaseQuantity(item)}
                                        >
                                            <Feather
                                                name={'plus'}
                                                size={24}
                                                color={'black'}
                                            />
                                        </Pressable>
                                    </View>
                                    <Pressable
                                        style={styles.cartDeleteSaveSee}
                                        onPress={() => deleteItem(item)}
                                    >
                                        <Text>Delete</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.cartSaveSeeBox}>
                                    <Pressable style={styles.cartDeleteSaveSee}>
                                        <Text>
                                            Save for later
                                        </Text>
                                    </Pressable>
                                    <Pressable style={styles.cartDeleteSaveSee}>
                                        <Text>
                                            See more like this
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    )
                }
            </View>
        </ScrollView>
    );
};

export default CartScreen;


