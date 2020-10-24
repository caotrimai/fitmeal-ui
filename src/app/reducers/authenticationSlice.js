import { createSlice } from "@reduxjs/toolkit";
import { register, login } from '../thunks/userThunk'


const initialState = {
    loggedIn: false,
    currentUser: null,
};

const authenticationSlice = createSlice({
    name: "authentication",
    slice: "authenticationSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.loggedIn = true;
        },
        [register.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.loggedIn = true;
        },
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = authenticationSlice;

// Extract and export each action creator by name
export const { } = actions;


// Export the reducer, either as a default or named export
export default reducer;
