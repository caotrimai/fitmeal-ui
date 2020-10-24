import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibleRegForm: false,
}

const registerSlice = createSlice({
    name: "register",
    slice: "registerSlice",
    initialState,
    reducers: {
        setVisibleRegForm(state, action) {
            state.visibleRegForm = action.payload;
        }
    },
    extraReducers: {
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = registerSlice;

// Extract and export each action creator by name
export const { setVisibleRegForm } = actions;


// Export the reducer, either as a default or named export
export default reducer;
