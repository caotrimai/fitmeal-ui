import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFoodCombos } from '../thunks/productThunk'


const initialState = {
    foodCombos: [],
    loading: false,
    error: ''
};

const foodComboSlice = createSlice({
    name: "foodCombo",
    slice: "foodComboSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAllFoodCombos.pending]: (state, action) => {
            state.loading = true
        },
        [fetchAllFoodCombos.fulfilled]: (state, action) => {
            state.loading = false;
            state.foodCombos = action.payload;
        },
        [fetchAllFoodCombos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = foodComboSlice;

// Extract and export each action creator by name
export const { add } = actions;


// Export the reducer, either as a default or named export
export default reducer;
