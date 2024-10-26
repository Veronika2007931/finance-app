import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducers } from './filtersSlice'
import { authReducers } from './authSlice'
import { financesReducers } from './financesSlice';

const reducers = combineReducers({
    auth: authReducers,
    finances: financesReducers,
    filters: filtersReducers,
    })

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    persistedReducer
})

export const persistor = persistStore(store);