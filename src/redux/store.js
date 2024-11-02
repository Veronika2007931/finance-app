import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { filtersReducers } from './filtersSlice'
import { authReducers } from './authSlice'
import { financesReducers } from './financesSlice';
import { financesCategoriesReducers } from './financesCategoriesSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const reducers = combineReducers({
    auth: authReducers,
    finances: financesReducers,
    filters: filtersReducers,
    financesCategories: financesCategoriesReducers,
    })

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      }),
})

export const persistor = persistStore(store);