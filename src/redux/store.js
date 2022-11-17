import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from 'redux'

import userReducer from './slices/user.js'

const reducer = combineReducers({
   user: userReducer,
})

export const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   }),
})



setupListeners(store.dispatch)