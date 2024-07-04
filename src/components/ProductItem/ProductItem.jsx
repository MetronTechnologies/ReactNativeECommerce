import React, {useState} from 'react';
import {Image, Pressable, Text, ToastAndroid, View} from "react-native";
import {ProductItemStyles} from "./ProductItemStyles";
import {addToCart} from "../../redux/reducers/CartReducer";
import {useDispatch} from "react-redux";

const ProductItem = ({item}) => {
    const dispatch = useDispatch()
    const addItemToCart = (item) => {
        dispatch(addToCart(item));
        // const statement =
        ToastAndroid.showWithGravity(
            item.category + ' successfully added to cart',
            ToastAndroid.LONG,
            ToastAndroid.TOP
        );
    }
    const styles = ProductItemStyles;
    return (
        <Pressable
            style={styles.itemContainer}
            onPress={
                () => navigation.navigate('ProductInfo', {
                    id: item?.id,
                    title: item?.title,
                    price: item?.price,
                    carouselImages: item?.carouselImages,
                    color: item?.color,
                    size: item?.size,
                    oldPrice: item?.oldPrice,
                    item: item
                })
            }
        >
            <Image
                source={{uri: item?.image}}
                style={styles.itemImage}
            />
            <Text numberOfLines={1} style={styles.itemText}>
                {item?.title}
            </Text>
            <View style={styles.priceRatingContainer}>
                <Text style={styles.priceText}>
                    ${item?.price}
                </Text>
                <Text style={styles.ratingText}>
                    {item?.rating?.rate} ratings
                </Text>
            </View>
            <Pressable
                style={styles.itemCartAdder}
                onPress={() => addItemToCart(item)}
            >
                <Text>
                    Add To Cart
                </Text>
            </Pressable>
        </Pressable>
    );
};

export default ProductItem;
