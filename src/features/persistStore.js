import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducers } from './rootReducer'


const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage
}
const normalPersistConfig = {
  key: 'root',
  storage
}
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  blacklist: ['users']
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, reducers.user),
  account: reducers.account,
  location: reducers.location,
  language: reducers.language,
  cart: reducers.cart
  // account: persistReducer(normalPersistConfig, account),
  // location: persistReducer(normalPersistConfig, location),
  // language: persistReducer(normalPersistConfig, language),
  // cart: persistReducer(normalPersistConfig, cart),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


// đóng gói reducer gốc trong app
export const store = createStore(persistedReducer);
// đảm bảo redux state sẽ được lưu vào storage mỗi khi nó thay đổi
export const persistor = persistStore(store);

// export default persistedReducer;