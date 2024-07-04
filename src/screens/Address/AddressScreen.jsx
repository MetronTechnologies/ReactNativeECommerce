import React, {useContext, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, ToastAndroid, View} from "react-native";
import {AddressScreenStyles} from "./AddressScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from 'jwt-decode';
import {UserType} from "../../UserContext";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";

const AddressScreen = () => {
    const {userId, setUserId} = useContext(UserType);
    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem('authToken');
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;
            setUserId(userId);
        }
        fetchUser();
    }, []);
    const styles = AddressScreenStyles;
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const handleAddAddress = async () => {
        const navigation = useNavigation();
        const address = {
            name, mobileNo, houseNo, street, landmark, city, country, postalCode
        }
        await axios
            .post(`http://192.168.43.230:8000/location/update/${userId}`, address)
            .then(
                (response) => {
                    const {data} = response;
                    const reply = data.message;
                    ToastAndroid.showWithGravity(
                        reply,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM
                    );
                    setName("");
                    setMobileNo("");
                    setHouseNo("");
                    setStreet("");
                    setLandmark("");
                    setCity("");
                    setCountry("");
                    setPostalCode("");
                    navigation.goBack();
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
    }
    return (
        <ScrollView>
            <View style={styles.addressHeader}/>
            <View style={{paddingHorizontal: 20, gap: 25, paddingBottom: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                    Add a new address
                </Text>
                <TextInput
                    placeholder={'New York'}
                    placeholderTextColor={'black'}
                    style={styles.addAddressTextInput}
                />
                <View >
                    <Text style={styles.addressText}>
                        Full name (First and last name)
                    </Text>
                    <TextInput
                        placeholder={'Enter your name'}
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={name}
                        onChangeText={(e) => setName(e)}
                    />
                </View>
                <View>
                    <Text style={styles.addressText}>
                        Mobile Number
                    </Text>
                    <TextInput
                        placeholder={'Enter your mobile number'}
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={mobileNo}
                        onChangeText={(e) => setMobileNo(e)}
                    />
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.addressText}>
                        Flat, House Number, Building, Company
                    </Text>
                    <TextInput
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={houseNo}
                        onChangeText={(e) => setHouseNo(e)}
                    />
                </View>
                <View>
                    <Text style={styles.addressText}>
                        Area, Street, Sector, Village
                    </Text>
                    <TextInput
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={street}
                        onChangeText={(e) => setStreet(e)}
                    />
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.addressText}>
                        Landmark
                    </Text>
                    <TextInput
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={landmark}
                        onChangeText={(e) => setLandmark(e)}
                    />
                </View>
                <View>
                    <Text style={styles.addressText}>
                        City
                    </Text>
                    <TextInput
                        placeholder={'Enter your City'}
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={city}
                        onChangeText={(e) => setCity(e)}
                    />
                </View>
                <View>
                    <Text style={styles.addressText}>
                        Country
                    </Text>
                    <TextInput
                        placeholder={'Enter your Country'}
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        value={country}
                        onChangeText={(e) => setCountry(e)}
                    />
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.addressText}>
                        Postal Code
                    </Text>
                    <TextInput
                        placeholderTextColor={'black'}
                        style={styles.addressTextInput}
                        placeholder={'Enter your postal code'}
                        value={postalCode}
                        onChangeText={(e) => setPostalCode(e)}
                    />
                </View>
                <CustomButton
                    text={'Add Address'}
                    action={handleAddAddress}
                    loading={false}
                    color={'#FFC72C'}
                    radius={6}
                    textColor={'black'}
                />
            </View>
        </ScrollView>
    );
};

export default AddressScreen;
