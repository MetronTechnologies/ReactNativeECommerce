import {createSlice} from "@reduxjs/toolkit";
import {SignIn, SignUp} from "./AsyncActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        loading: false,
        token: '',
        clearing: false,
        userProfile: {}
    },
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if(itemPresent){
                itemPresent.quantity++
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter(
                (item ) => item.id !== action.payload.id
            );
            state.cart = removeItem;
        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            );
            itemPresent.quantity ++
        },
        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if(itemPresent.quantity === 1){
                itemPresent.quantity = 0;
                const removeItem = state.cart.filter(
                    (item ) => item.id !== action.payload.id
                );
                state.cart = removeItem;
            } else {
                itemPresent.quantity --;
            }
        },
        cleanCart: (state) => {
            state.cart = [];
        },
        startLoading: (state) => {
            state.loading = true;
            console.log(state.loading)
        },
        endLoading: (state) => {

        },
        startClearing: (state) => {
            state.clearing = true
        },
        endClearing: (state) => {
            state.clearing = false;
        },
        saveUser: (state, action) => {
            state.userProfile = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(SignIn.fulfilled, (state, action) => {
            state.token = action?.payload;
            AsyncStorage.setItem('authToken', action?.payload);
            state.loading = false;
            state.clearing = true;
        });
        builder.addCase(SignIn.pending, (state) => {
            state.loading = true
        });
        builder.addCase(SignUp.fulfilled, (state, action) => {
            state.token = action?.payload;
            state.loading = false
        });
        builder.addCase(SignUp.pending, (state) => {
            state.loading = true
        });
        // builder.addCase(SaveUserToDB.fulfilled, (state, action) => {
        //     state.userList.push(action.payload);
        // });
        // builder.addCase(UpdateDBUser.fulfilled, (state, action) => {
        //     const index = state.userList.findIndex(user => user.id === action.payload.id);
        //     state.userList[index] = {
        //         ...state.userList[index],
        //         ...action.payload,
        //     };
        // })
    }
});



export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity, cleanCart, startLoading, endLoading, startClearing, endClearing, saveUser} = CartSlice.actions;
export default CartSlice.reducer;