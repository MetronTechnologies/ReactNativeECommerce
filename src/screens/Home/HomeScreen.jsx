import React, {useCallback, useContext, useEffect, useState} from 'react';
import {HomeScreenStyles} from "./HomeScreenStyles";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Pressable,
    TextInput,
    FlatList,
    Image,
    Dimensions,
    StatusBar
} from "react-native";
import {AntDesign, Entypo, Feather, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {ProductCategories} from "../../data/ProductCategories";
import {HomeSlideImages} from "../../data/HomeSlideImages";
import {deals} from "../../data/HomeDeals";
import Slider from "../../components/Slider/Slider";
import {offers} from "../../data/HomeOffers";
import axios from "axios";
import ProductItem from "../../components/ProductItem/ProductItem";
import {Items} from "../../data/Items";
import {useNavigation} from "@react-navigation/native";
import Header from "../../components/Header/Header";
import DropDownPicker from "react-native-dropdown-picker";
import {TestSliders} from "../../data/TestSliders";
import {UserType} from "../../UserContext";
import {useSelector} from "react-redux";
import {BottomModal, ModalContent} from "react-native-modals/src";
import {SlideAnimation} from "react-native-modals";
import {testaddress} from "../../data/testaddress";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
    const [open, setOpen] = useState(false);
    const navigation = useNavigation()
    const [category, setCategory] = useState('All');
    const [item, setItem] = useState(Items);
    const [addresses, setAddresses] = useState(testaddress);
    const {userId, setUserId} = useContext(UserType);
    const [selectedAddress, setSelectedAddress] = useState('');
    const cart = useSelector(
        (state) => state.cart.cart
    );
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if(userId){
            fetchAddresses();
        }
    }, [userId, modalVisible]);
    const onGenderOpen = useCallback(
        () => {
            setCompanyOpen(false);
        }, []
    )
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
    useEffect(
        () => {
            const fetchProducts = async () => {
                try {
                    const response = await axios
                        .get("https://fakestoreapi.com/products")
                        .then(
                            (reply) => {
                                // console.log(reply)
                                setProducts(reply.data)
                            }
                        )
                } catch (e) {
                    console.log("Error fetching data ---> ", e)
                }
            }
            fetchProducts();
        }, []
    )
    const styles = HomeScreenStyles;
    const statusBarHeight = StatusBar.currentHeight;
    const [products, setProducts] = useState([]);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Header />
                    <Pressable
                        style={styles.deliveryBar}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Ionicons
                            name={'location-outline'}
                            size={24}
                            color={'black'}
                        />
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.deliveryBarText}>
                                {
                                    selectedAddress ? (
                                        `Deliver to ${selectedAddress?.name} - ${selectedAddress?.street}`
                                    ) : (
                                        `${'Add an address'}`
                                    )
                                }
                            </Text>
                        </Pressable>
                        <MaterialIcons
                            name={'keyboard-arrow-down'}
                            size={24}
                            color={'black'}
                        />
                    </Pressable>
                    <FlatList
                        horizontal
                        bounces={false}
                        data={ProductCategories}
                        keyExtractor={
                            (item) => item.id
                        }
                        showsHorizontalScrollIndicator={false}
                        renderItem={
                            ({item, index}) => (
                                <View style={styles.productCategoryBox}>
                                    <Image
                                        source={{uri: item.image}}
                                        style={styles.categoryImage}
                                    />
                                    <Text style={styles.productCategoryName}>
                                        {item?.name}
                                    </Text>
                                </View>
                            )
                        }
                    />
                    <Slider SlideData={TestSliders}/>
                    <Text style={styles.trendingText}>
                        Trending deals of the week
                    </Text>
                    <View style={styles.trendingImagesContainer}>
                        {
                            deals.map(
                                (item, index) => (
                                    <Pressable
                                        key={index}
                                        style={styles.trendingImagesPress}
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
                                            style={styles.trendingImages}
                                        />
                                    </Pressable>
                                )
                            )
                        }
                    </View>
                    <Text style={styles.divider}/>
                    <Text style={styles.todayDeals}>
                        Today's Deals
                    </Text>
                    <FlatList
                        horizontal
                        bounces={false}
                        data={offers}
                        keyExtractor={
                            (item) => item.id
                        }
                        showsHorizontalScrollIndicator={false}
                        renderItem={
                            ({item}) => (
                                <Pressable
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
                                    style={styles.todayDealsBox}
                                >
                                    <Image
                                        source={{uri: item?.image}}
                                        style={styles.todayDealsImage}
                                    />
                                    <View style={styles.offerTextBox}>
                                        <Text style={styles.offerText}>
                                            {item?.offer}
                                        </Text>
                                    </View>
                                </Pressable>
                            )
                        }
                    />
                    <Text style={styles.divider}/>
                    <View style={[styles.dropDownPicker, {marginBottom: open ? 50 : 15}]}>
                        {/*<DropDownPicker*/}
                        {/*    // style={[styles.dropDown, {genderOpen ? 120 : 15}]}*/}
                        {/*    open={open}*/}
                        {/*    value={category}*/}
                        {/*    items={items}*/}
                        {/*    setOpen={setOpen}*/}
                        {/*    setValue={setCategory}*/}
                        {/*    setItems={setItems}*/}
                        {/*    placeholder={'Choose category'}*/}
                        {/*    placeholderStyle={styles.placeholderStyles}*/}
                        {/*    onOpen={onGenderOpen}*/}
                        {/*    zIndex={3000}*/}
                        {/*    zIndexInverse={1000}*/}
                        {/*/>*/}

                    </View>
                    <View style={styles.productItem}>
                        {
                            category !== 'All' ? (
                                products?.filter(
                                    (item) => item.category === category
                                ).map(
                                    (item, index) => (
                                        <ProductItem
                                            item={item}
                                            key={index}
                                        />
                                    )
                                )
                            ) : (
                                products?.map(
                                    (item, index) => (
                                        <ProductItem
                                            item={item}
                                            key={index}
                                        />
                                    )
                                )
                            )
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
            <BottomModal
                onBackdropPress={
                    () => setModalVisible(!modalVisible)
                }
                swipeDirection={['up', 'down']}
                swipeThreshold={200}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: 'bottom'
                    })
                }
                onHardwareBackPress={
                    () => setModalVisible(!modalVisible)
                }
                visible={modalVisible}
                onTouchOutside={
                    () => setModalVisible(!modalVisible)
                }
            >
                <ModalContent style={styles.modalContent}>
                    <View style={{marginBottom: 8}}>
                        <Text style={styles.modalContentChooseText}>Choose your location</Text>
                        <Text style={styles.modalContentSelectText}>Select a delivery location to see product availability and delivery options</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            addresses?.map(
                                (address, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => {
                                            setSelectedAddress(address)
                                        }}
                                        style={[
                                            styles.modalAddressContainer, {
                                                backgroundColor: selectedAddress === address ? '#FBCEB1' : 'white'
                                            }
                                        ]}
                                    >
                                        <View style={styles.modalAddressNameBox}>
                                            <Text style={styles.modalAddressNameText}>
                                                {address?.name}
                                            </Text>
                                            <Entypo
                                                name={'location-pin'}
                                                size={24}
                                                color={'red'}
                                            />
                                        </View>
                                        <Text numberOfLines={1} style={styles.modalAddressText}>
                                            {address?.houseNo}, {address?.landmark}
                                        </Text>
                                        <Text numberOfLines={1} style={styles.modalAddressText}>
                                            {address?.street}
                                        </Text>
                                        <Text numberOfLines={1} style={styles.modalAddressText}>
                                            {address?.city}, {address?.country}
                                        </Text>
                                    </Pressable>
                                )
                            )
                        }
                        <Pressable
                            style={styles.modalContentAddAddress}
                            onPress={
                                () => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('AddAddress')
                                }
                            }
                        >
                            <Text style={styles.modalContentAddressText}>
                                Add an address or pick a point
                            </Text>
                        </Pressable>
                    </ScrollView>
                    <View style={styles.modalLocationContainer}>
                        <View style={styles.modalLocationBox}>
                            <Entypo
                                name={'location-pin'}
                                size={22}
                                color={'#0066B2'}
                            />
                            <Text style={styles.modalLocationText}>
                                Enter a postal code
                            </Text>
                        </View>
                        <View style={styles.modalLocationBox}>
                            <Ionicons
                                name={'locate-sharp'}
                                size={22}
                                color={'#0066B2'}
                            />
                            <Text style={styles.modalLocationText}>
                                Use my current location
                            </Text>
                        </View>
                        <View style={styles.modalLocationBox}>
                            <AntDesign
                                name={'earth'}
                                size={22}
                                color={'#0066B2'}
                            />
                            <Text style={styles.modalLocationText}>
                                Deliver outside of New York
                            </Text>
                        </View>
                    </View>
                </ModalContent>
            </BottomModal>
        </>
    );
};

export default HomeScreen;
