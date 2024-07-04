import React from 'react';
import {Pressable, Text} from "react-native";
import {CustomButtonStyles} from "./CustomButtonStyles";

const CustomButton = ({text, action, loading=false, color, radius, textColor}) => {
    const styles = CustomButtonStyles;
    return (
        <Pressable
            style={
                !loading ? ([
                    styles.customButton, {
                        backgroundColor: color ? color : '#FEBE10',
                        borderRadius: radius ? radius : 20
                    }]
                ) : ([
                    styles.customButton, {
                        backgroundColor: color ? color : '#ffd699',
                        borderRadius: radius ? radius : 20
                    }]
                )
            }
            onPress={action}
            disabled={loading}
        >
            <Text
                style={[
                    styles.customButtonText, {
                        color: textColor ? textColor : 'white',
                    }
                ]}
            >
                {
                    loading ? '...Loading' : `${text}`
                }
            </Text>
        </Pressable>
    );
};

export default CustomButton;
