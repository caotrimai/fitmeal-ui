import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {reduxBatch} from '@manaflair/redux-batch';
// import logger from 'redux-logger'

import rootReducer from '../../features/rootReducer'
import {persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const blacklistFilter = createBlacklistFilter('user', ['users']);

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    'account',
    'cart',
    'language',
    'location'
  ],
  transform: [blacklistFilter]
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const middleware = [
  ...getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
  }),
  // logger
]

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch]
})

export const persistor = persistStore(store);
// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were automatically composed together