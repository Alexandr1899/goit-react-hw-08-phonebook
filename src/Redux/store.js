import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth/slice'
import { contactsSlice, filterSlice } from './slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"]
}

const rootReducer = combineReducers({
    "contacts": contactsSlice.reducer,
    "filter": filterSlice.reducer,
    "auth": persistReducer(persistConfig, authSlice.reducer)
})

export const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
        }),
})
export const persistor = persistStore(store)