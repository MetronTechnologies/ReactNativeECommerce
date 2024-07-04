import React, {useEffect, useState} from 'react';
import {MaterialIcons, AntDesign, Ionicons} from "@expo/vector-icons";
import {TextInput, View} from "react-native";
import {InputFieldStyles} from "./InputFieldStyles";

const InputFields = ({
                         iconType = 'material' || 'ant' || 'ion',
                         iconName,
                         textInputPlaceHolder,
                         clear=false,
                         onChange,
                         isSecured = false,
                     }) => {

    const [input, setInput] = useState('');
    const styles = InputFieldStyles;
    useEffect(
        () => {
            if(clear) setInput('');
        }, [clear]
    )
    return (
        <View style={styles.inputContainer}>
            {
                iconType === 'material' ? (
                    <MaterialIcons
                        name={iconName}
                        size={24}
                        color={'gray'}
                        style={styles.inputIcon}
                    />
                ) : (
                    iconType === 'ant' ? (
                        <AntDesign
                            name={iconName}
                            size={24}
                            color={'gray'}
                            style={styles.inputIcon}
                        />
                    ) : (
                        <Ionicons
                            name={iconName}
                            size={24}
                            color={'gray'}
                            style={styles.inputIcon}
                        />
                    )
                )
            }
            <TextInput
                placeholder={textInputPlaceHolder}
                style={styles.inputText}
                value={input}
                onChangeText={
                    (x) => {
                        setInput(clear ? '': x)
                        onChange(clear ? '': x)
                    }
                }
                secureTextEntry={isSecured}
            />
        </View>
    );
};

export default InputFields;
