import { createSlice } from "@reduxjs/toolkit";
import { save } from '../thunks/orderThunk'



const initialState = {
    addStt: null,
    addError: null,
    orders: []
};

const orderSlice = createSlice({
    name: "order",
    slice: "orderSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [save.pending]: (state, action) => { state.addStt = 'pending' },
        [save.fulfilled]: (state, action) => {
            state.addStt = 'done';
            state.orders = action.payload.concat(state.payload);
        },
        [save.rejected]: (state, action) => { state.addError = action.payload }
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = orderSlice;

// Extract and export each action creator by name
export const { } = actions;


// Export the reducer, either as a default or named export
export default reducer;