import { createSlice } from "@reduxjs/toolkit";
import { login } from 'app/thunks/userThunk'

const initialState = {
    visibleLoginForm: false,
    loginError: false,
}

const loginSlice = createSlice({
    name: "login",
    slice: "loginSlice",
    initialState,
    reducers: {
        setVisibleLoginForm(state, action) {
            state.visibleLoginForm = action.payload;
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.visibleLoginForm = false;
        },
        [login.rejected]: (state, action) => {
            state.loginError = action.error.message;
        },
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = loginSlice;

// Extract and export each action creator by name
export const { setVisibleLoginForm } = actions;


// Export the reducer, either as a default or named export
export default reducer;
