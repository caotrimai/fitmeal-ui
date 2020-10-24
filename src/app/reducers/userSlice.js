import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register, login } from '../thunks/userThunk'
import userService from "common/service/userService";


let users = userService.fetchAll();
const initialState = {
    users,
    register: null,
    registerError: null
};

const userSlice = createSlice({
    name: "user",
    slice: "userSlice",
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.users = state.users ? state.users.concat(action.payload) : [action.payload];
        }
    },
    extraReducers: {
        [register.pending]: (state, action) => { state.register = 'pending' },
        [register.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.register = 'done';
            state.users = userService.fetchAll();
            // set another states
        },
        [register.rejected]: (state, action) => { state.registerError = action.payload },
        [login.fulfilled]: (state, action) => {
            state.users = userService.fetchAll();
            // set another states
        },
    }
});


// Extract the action creators object and the reducer
const { actions, reducer } = userSlice;

// Extract and export each action creator by name
export const { add } = actions;


// Export the reducer, either as a default or named export
export default reducer;
