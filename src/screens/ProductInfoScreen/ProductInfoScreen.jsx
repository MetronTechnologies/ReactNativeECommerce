import React, {useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, View} from "react-native";
import {ProductInfoScreenStyles} from "./ProductInfoScreenStyles";
import Header from "../../components/Header/Header";
import {useRoute} from "@react-navigation/native";
import {ProductCategories} from "../../data/ProductCategories";
import {AntDesign, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton/CustomButton";
import {addToCart} from "../../redux/reducers/CartReducer";
import {useDispatch} from "react-redux";

const ProductInfoScreen = () => {
    const styles = ProductInfoScreenStyles;
    const route = useRoute();
    const {width} = Dimensions.get('window');
    const height = (width * 100) / 100;
    const [addingToCart, setAddingToCart] = useState(false);
    const [buyingNow, setBuyingNow] = useState(false)
    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        dispatch(addToCart(item));
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.infoMainContainer}>
            <Header/>
            <FlatList
                horizontal
                bounces={false}
                data={route.params?.carouselImages}
                keyExtractor={
                    (item) => item.id
                }
                showsHorizontalScrollIndicator={false}
                renderItem={
                    ({item, index}) => (
                        <ImageBackground
                            key={index}
                            source={{uri: item}}
                            style={[styles.imageBackGround, {
                                    width: width,
                                    height: height
                                }
                            ]}
                        >
                            <View style={styles.infoDiscountMainContainer}>
                                <View style={styles.infoDiscountContainer}>
                                    <Text style={styles.infoDiscountText}>
                                        20% off
                                    </Text>
                                </View>
                                <View style={[
                                    styles.infoDiscountContainer, {
                                        backgroundColor: '#E0E0E0'
                                    }
                                ]}>
                                    <MaterialCommunityIcons
                                        name={'share-variant'}
                                        size={24}
                                        color={'black'}
                                    />
                                </View>
                            </View>
                            <View style={[
                                styles.infoDiscountContainer, {
                                    backgroundColor: '#E0E0E0',
                                    marginTop: 'auto',
                                    marginLeft: 20,
                                    marginBottom: 20
                                }
                            ]}>
                                <AntDesign
                                    name={'hearto'}
                                    size={24}
                                    color={'black'}
                                />
                            </View>
                        </ImageBackground>
                    )
                }
            />
            <View style={styles.infoContainer}>
                <Text
                    style={styles.infoContainerTitle}
                >
                    {route?.params?.title}
                </Text>
                <Text
                    style={styles.infoDiscountPrice}
                >
                    {route?.params?.price}
                </Text>

            </View>
            <Text style={styles.divider}/>
            <View style={styles.infoColorContainer}>
                <Text>Color: </Text>
                <Text style={styles.infoColorText}>
                    {route?.params?.color}
                </Text>
            </View>
            <View style={styles.infoColorContainer}>
                <Text>Size: </Text>
                <Text style={styles.infoColorText}>
                    {route?.params?.size}
                </Text>
            </View>
            <Text style={styles.divider}/>
            <View style={{padding: 10}}>
                <Text style={styles.infoTotal}>
                    Total: {route?.params?.price}
                </Text>
                <Text style={{color: '#00CED1'}}>
                    FREE Delivery Tomorrow by 3PM. Order within 10hrs 30mins
                </Text>
                <View style={styles.infoLocationContainer}>
                    <Ionicons
                        size={24}
                        name={'location'}
                        color={'black'}
                    />
                    <Text style={styles.infoLocationText}>
                        Deliver To New-York
                    </Text>
                </View>
            </View>
            <Text style={styles.inStock}>IN STOCK</Text>
            <View style={{padding: 20, gap: 20}}>
                <CustomButton
                    text={'Add To cart'}
                    action={() => addItemToCart(route?.params?.item)}
                    loading={addingToCart}
                    color={'#FFC72C'}
                    radius={20}
                />
                <CustomButton
                    text={'Buy Now'}
                    action={() => {}}
                    loading={buyingNow}
                    color={'#FFAC1C'}
                    radius={20}
                />
            </View>
        </ScrollView>
    );
};

export default ProductInfoScreen;
