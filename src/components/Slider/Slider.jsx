import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, Image, Pressable, Text, View} from "react-native";
import {SliderStyles} from "./SliderStyles";
import {HomeSlideImages} from "../../data/HomeSlideImages";
import {TestSliders} from "../../data/TestSliders";
import {MaterialIcons} from "@expo/vector-icons";

const Slider = ({SlideData}) => {
    const styles = SliderStyles;
    const { width } = Dimensions.get('window');
    const [index, setIndex] = useState(0);

    // useEffect(
    //     () => {
    //         let slider = setInterval(
    //             () => {
    //                 let value = index + 1;
    //                 if(value < 0){
    //                     value = TestSliders.length-1;
    //                 }
    //                 if(value > 4) {
    //                     value = 0;
    //                 }
    //                 setIndex(value);
    //             }, 5000
    //         );
    //         return () => {
    //             clearInterval(slider)
    //         }
    //     }, [index]
    // );

    // useEffect(() => {
    //     console.log(index)
    // }, [index]);

    return (
        <View style={styles.sliderContainer}>
            <FlatList
                data={SlideData}
                renderItem={
                    ({item}) => {
                        return (
                            <Image
                                source={
                                    SlideData.find(x => x.id === index).img
                                }
                                style={[styles.sliderImage, {width: width}]}
                                resizeMode="cover"
                            />
                        )
                    }
                }
                keyExtractor={
                    (item) => item.id
                }
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.arrowContainer}>
                <Pressable
                >
                    <MaterialIcons
                        name={'arrow-circle-left'}
                        size={30}
                        color={'black'}
                        onPress={
                            () => {
                                console.log("Starting index ", index)
                                const lastIndex = SlideData.length - 1;
                                if(index <= 0){
                                    console.log("index is less than 0")
                                    setIndex(lastIndex);
                                } else {
                                    console.log("index is now decreasing")
                                    setIndex(index - 1);
                                    console.log("ending index ", index)
                                }
                            }
                        }
                    />
                </Pressable>
                <Pressable>
                    <MaterialIcons
                        name={'arrow-circle-right'}
                        size={30}
                        color={'black'}
                        onPress={
                            () => {
                                const lastIndex = SlideData.length - 1;
                                console.log(index);
                                if(index >= lastIndex) {
                                    console.log("index is greater than ", SlideData.length - 1)
                                    setIndex(0);
                                } else {
                                    setIndex(index + 1)
                                }
                            }
                        }
                    />
                </Pressable>
            </View>
            <View style={styles.slideIndicatorContainer}>
                {
                    SlideData.map(
                        (slide) => (
                            <Pressable
                                key={slide.id}
                                style={styles.indicatorRing}
                                onPress={() => setIndex(slide.id)}
                            >
                                <Pressable
                                    style={slide.id === index && styles.indicator}
                                />
                            </Pressable>
                        )
                    )
                }
            </View>
        </View>
    );
};

export default Slider;
