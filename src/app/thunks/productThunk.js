import { createAsyncThunk } from "@reduxjs/toolkit";

import { productService } from "common/service/productService";

export const fetchAllFoodCombos = createAsyncThunk(
    'product/fetchAllFoodMenu',
    async (params, thunkAPI) => {
        //params: params when call this action
        //thunkAPI of createAsyncThunk, to dispatch other actions
        // ex: thunkAPI.dispatch(...)
        try {
            const response = await productService.fetchAllFoodMenu();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
        //note: unwrapResole can catch the error
    }
);

export const addToCart = createAsyncThunk(
    'product/addToCart',
    async (params, thunkAPI) => {
        try {
            const response = await productService.addToCart(params.userId, params.productId);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);