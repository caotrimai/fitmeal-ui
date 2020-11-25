import { createSlice } from "@reduxjs/toolkit";
import { register, login } from '../thunks/userThunk'


const initialState = {
    loggedIn: false,
    user: null,
};

const AccountSlice = createSlice({
    name: "account",
    slice: "accountSlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
        [register.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = AccountSlice;

// Extract and export each action creator by name
export const { } = actions;


// Export the reducer, either as a default or named export
export default reducer;