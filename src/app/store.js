import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistReducer from "../features/whishlist/wishlistSlice";
import productReducer from "../features/product/productSlice";
import ratingReducer from "../features/starRating/ratingSlice";
import addtoCartReducer from "../features/addcart/addtoCart";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import ordersReducer from "../features/orders/ordersSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  products: productReducer,
  ratings: ratingReducer,
  cart: addtoCartReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
