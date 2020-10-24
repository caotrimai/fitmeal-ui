import { createAsyncThunk } from "@reduxjs/toolkit";

import { save as saveOrder } from 'common/service/orderService'

export const save = createAsyncThunk(
    'order/save',
    async (order, thunkAPI) => {
        try {
            const response = await saveOrder(order); //oder list
            return response.data;
        } catch (error) {
            console.log(error);

            throw error;
        }
    }
);