import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, ToastAndroid, View} from "react-native";
import {AddAddressScreenStyles} from "./AddAddressScreenStyles";
import Header from "../../components/Header/Header";
import {Entypo, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import axios from "axios";
import {UserType} from "../../UserContext";
import {testaddress} from "../../data/testaddress";

const AddAddressScreen = () => {
    const styles = AddAddressScreenStyles;
    const navigation = useNavigation();
    const [addresses, setAddresses] = useState(testaddress);
    const {userId, setUserId} = useContext(UserType);
    // useEffect(() => {
    //     fetchAddresses();
    // }, []);
    useFocusEffect(
        useCallback(
            () => {
                fetchAddresses();
            },
            [],
        )
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
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Header />
            <View style={{padding: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Your Addresses
                </Text>
                <Pressable
                    style={styles.newAddressContainer}
                    onPress={
                        () => {navigation.navigate('Address')}
                    }
                >
                    <Text>Add  a new address</Text>
                    <MaterialIcons
                        name={'keyboard-arrow-right'}
                        size={24}
                        color={'black'}
                    />
                </Pressable>
                <Pressable>
                    {
                        addresses?.map(
                            (address, index) => (
                                <Pressable style={styles.addressContainer}>
                                    <View style={styles.addressNameBox}>
                                        <Text style={styles.addressNameText}>
                                            {address?.name}
                                        </Text>
                                        <Entypo
                                            name={'location-pin'}
                                            size={24}
                                            color={'red'}
                                        />
                                    </View>
                                    <Text style={styles.addressText}>
                                        {address?.houseNo}, {address?.landmark}
                                    </Text>
                                    <Text style={styles.addressText}>
                                        {address?.street}
                                    </Text>
                                    <Text style={styles.addressText}>
                                        {address?.city}, {address?.country}
                                    </Text>
                                    <Text style={styles.addressText}>
                                        {address?.mobileNo}
                                    </Text>
                                    <Text style={styles.addressText}>
                                        {address?.postalCode}
                                    </Text>
                                    <View style={styles.addressButtonContainer}>
                                        <Pressable style={styles.addressButton}>
                                            <Text>Edit</Text>
                                        </Pressable>
                                        <Pressable style={styles.addressButton}>
                                            <Text>Remove</Text>
                                        </Pressable>
                                        <Pressable style={styles.addressButton}>
                                            <Text>Set as default</Text>
                                        </Pressable>
                                    </View>
                                </Pressable>
                            )
                        )
                    }
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default AddAddressScreen;
