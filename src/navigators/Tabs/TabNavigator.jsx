import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import {AntDesign, Entypo, Ionicons} from "@expo/vector-icons";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import CartScreen from "../../screens/Cart/CartScreen";
import {TabNavigatorStyles} from "./TabNavigatorStyles";

const TabNavigator = () => {
    const tab = createBottomTabNavigator();
    const styles = TabNavigatorStyles;
    return (
        <tab.Navigator>
            <tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: styles.homeScreen,
                    headerShown: false,
                    tabBarIcon: (
                        ({focused}) => (
                            focused ? (
                                <Entypo
                                    name={'home'}
                                    size={24}
                                    color={styles.homeScreen.color}
                                />
                            ) : (
                                <AntDesign
                                    name={'home'}
                                    size={24}
                                    color={'black'}
                                />
                            )
                        )
                    )
                }}
            />
            <tab.Screen
                name={'Profile'}
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: styles.homeScreen,
                    headerShown: true,
                    tabBarIcon: (
                        ({focused}) => (
                            focused ? (
                                <Ionicons
                                    name={'person'}
                                    size={24}
                                    color={styles.homeScreen.color}
                                />
                            ) : (
                                <Ionicons
                                    name={'person-outline'}
                                    size={24}
                                    color={'black'}
                                />
                            )
                        )
                    )
                }}
            />
            <tab.Screen
                name={'Cart'}
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarLabelStyle: styles.homeScreen,
                    headerShown: false,
                    tabBarIcon: (
                        ({focused}) => (
                            focused ? (
                                <AntDesign
                                    name={'shoppingcart'}
                                    size={24}
                                    color={styles.homeScreen.color}
                                />
                            ) : (
                                <AntDesign
                                    name={'shoppingcart'}
                                    size={24}
                                    color={'black'}
                                />
                            )
                        )
                    )
                }}
            />
        </tab.Navigator>
    );
};

export default TabNavigator;
