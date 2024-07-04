import React from 'react';
import {Pressable, TextInput, View} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {HeaderStyles} from "./HeaderStyles";

const Header = () => {
    const styles = HeaderStyles;
    return (
        <View style={styles.header}>
            <Pressable style={styles.searchBox}>
                <AntDesign
                    name={'search1'}
                    size={22}
                    color={'black'}
                    style={{paddingLeft: 10}}
                />
                <TextInput
                    placeholder={'Search Your Favourite Products'}
                />
            </Pressable>
            <Feather
                name={'mic'}
                size={24}
                color={'black'}
            />
        </View>
    );
};

export default Header;
