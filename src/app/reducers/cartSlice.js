import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';
import { fetchByCartIds } from 'common/service/productService'
import { save as saveOrder } from '../thunks/orderThunk'


const getTotalPrice = (products) => {
    let totalPrice = 0;
    for (const product of products) {
        totalPrice += parseInt(product.price) * parseInt(product.amount);
    }
    return totalPrice
}


const items = localStorage.getItem('cart.items') ? JSON.parse(localStorage.getItem('cart.items')) : [];
const products = fetchByCartIds(items)
const totalPrice = getTotalPrice(products);


const initialState = {
    items,
    totalPrice
}

const cartSlice = createSlice({
    name: "cart",
    slice: "cartSlice",
    initialState: initialState,
    reducers: {
        setProducts(state, action) {
            localStorage.setItem('cart.items', JSON.stringify(action.payload));
            const items = fetchByCartIds(action.payload);
            const totalPrice = getTotalPrice(items);

            state.items = action.payload;
            state.totalPrice = totalPrice;
        },
        remove(state, action) {
            state.items = _.remove(state.items, action.payload);
        },
        clear(state) {
            state.items = [];
            state.totalPrice = 0;
            localStorage.setItem('cart.items', []);
        }
    },
    extraReducers: {
        [saveOrder.fulfilled]: (state, action) => {
            state.items = [];
            state.totalPrice = 0;
            localStorage.setItem('cart.items', []);
        }
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;

// Extract and export each action creator by name
export const { setProducts, remove, clear } = actions;


// Export the reducer, either as a default or named export
export default reducer;