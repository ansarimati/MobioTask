import {createSlice} from "@reduxjs/toolkit";
import {performSorting} from "../utils/util";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItem: (state, action) => {
            // --- performing default sorting based on name
            state.items = performSorting(action.payload, "title");
        },

        sortItems: (state, action) => {
            // --- perform sorting based on name or price on dropdown change
            state.items = performSorting(state.items, action.payload);
        },

        addToCart: (state, action) => {

                state.cart = [...state.cart, action.payload];

            
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload) {
                    item.count++;
                }

                return item;
            });
        },

        decreaseCount: (state, action) => {
            const updatedCart = state.cart.map(item => {
                if (item.id === action.payload && item.count >= 1) {
                    item.count--;
                }
                return item.count <= 0 ? undefined : item;
            });
            state.cart = updatedCart.filter(i => i !== undefined);
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
            console.log(state.isCartOpen)
        }
    }
});


export const {
    setItem,
    sortItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;