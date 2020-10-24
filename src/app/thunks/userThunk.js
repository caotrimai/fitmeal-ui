import { createAsyncThunk } from "@reduxjs/toolkit";

import { setVisibleRegForm } from "features/register/reducer/registerSlice";

import userService from "common/service/userService";

export const register = createAsyncThunk(
    'user/register',
    async (user, thunkAPI) => {
        try {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const response = userService.register(user);
                    resolve(response.data);
                }, 500);
                thunkAPI.dispatch(setVisibleRegForm(false));
            });
        } catch (error) {
            console.log(error);

            throw error;
        }
    }
);

export const login = createAsyncThunk(
    'user/login',
    async (user, thunkAPI) => {
        try {
            const response = await userService.login(user.phone, user.password);
            return response.data;
        } catch (error) {
            console.log(error);

            throw error;
        }
    }
);