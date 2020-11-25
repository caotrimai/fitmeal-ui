import axiosClient from './axiosClient'
import { productData } from './products-data'


const WEEK_COMBO = 'WEEK_COMBO';

export const getRelatedProducts = () => {
  return productData.filter(product => product.type === WEEK_COMBO);
}

export const fetchByParam = (param) => {
  return productData.filter(product => product.name === param || product.type === param || product.restaurant === param);
}

export const fetchById = (id) => {
  return productData.find(product => product.id === id);
}

export const fetchByCartIds = (items) => {
  if (items)
    return items.map(item => { return { ...fetchById(item.productId), ...item } });
  return []
}


export const productServiceLocal = {
  fetchAllFoodMenu: () => productData,
  fetchById,
}

export const productService = {
  fetchAllDailyMenu: () => {
    const url = 'http://localhost:8200/d-menu/all'
    return axiosClient.get(url)
  },
  fetchAllFoodMenu: () => {
    const url = 'http://localhost:8200/w-menu/all'
    return axiosClient.get(url)
  },
  fetchById: (id) => {
    const url = `http://localhost:8200/w-menu/fetch-combo/${id}`
    return axiosClient.get(url)
  },
  fetchRestaurantById: (id) => {
    const url = `http://localhost:8200/restaurant/fetch-by-id/${id}`
    return axiosClient.get(url)
  },
  addToCart: (id) => {
    const url = `http://localhost:8200/restaurant/fetch-by-id/${id}`
    return axiosClient.get(url)
  },
}