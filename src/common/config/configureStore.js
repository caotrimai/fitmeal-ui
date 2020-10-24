import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reduxBatch } from '@manaflair/redux-batch';
// import logger from 'redux-logger'

import rootReducer from '../../features/rootReducer.js'

const middleware = [
    ...getDefaultMiddleware(),
    // logger
]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch]
})

export default store

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were automatically composed together