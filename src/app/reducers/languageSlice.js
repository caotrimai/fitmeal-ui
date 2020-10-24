import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    slice: "languageSlice",
    initialState: "vi_VN",
    reducers: {
        changeLanguage(state, action) {
            state.language = action.payload;
        },
        resetDefaultLanguage(state, action) {
            state.language = "en_US";
        }
    }
});

// console.log(languageSlice);

// Extract the action creators object and the reducer
const { actions, reducer } = languageSlice;

// Extract and export each action creator by name
export const { changeLanguage, resetDefaultLanguage } = actions;

// Export the reducer, either as a default or named export
export default reducer;
