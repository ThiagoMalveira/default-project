import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { Reducer } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  // auth: authReducer,
});

const persistConfig = {
  key: "konekte",
  storage,
  whitelist: [
    // 'user',
  ],
};

const persistedReducer: Reducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export const clearStorage = async () => {
  return localStorage.clear();
};

export const removeStorage = async (key = "konekte") => {
  return localStorage.removeItem(`persist:${key}`);
};

export const getStorage = async (key = "konekte") => {
  return localStorage.getItem(`persist:${key}`);
};

export const clearStore = () => {
  // deleteAuth()
};
