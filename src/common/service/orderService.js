import { orderData } from './order-data'



export const fetchAll = async () => {
    return JSON.parse(JSON.stringify(orderData))
}

export const fetch = async (userId, week) => {
}

export const save = async (orders) => {
    const newOrders = orderData.concat([orders]);
    // write data to output stream...

    return { data: newOrders };
}