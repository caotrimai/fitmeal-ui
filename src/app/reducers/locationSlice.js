import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    referrer: null,
};

const locationSlice = createSlice({
    name: "location",
    slice: "locationSlice",
    initialState: initialState,
    reducers: {
        setReferrer: (state, action) => {
            state.referrer = action.payload
        }
    },
    extraReducers: {
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = locationSlice;

// Extract and export each action creator by name
export const { setReferrer } = actions;


// Export the reducer, either as a default or named export
export default reducer;
