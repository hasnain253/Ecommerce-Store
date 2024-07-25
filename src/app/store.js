import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistReducer from "../features/whishlist/wishlistSlice";
import productReducer from "../features/product/productSlice";
import ratingReducer from "../features/starRating/ratingSlice";
import addtoCartReducer from "../features/addcart/addtoCart";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  products: productReducer,
  ratings: ratingReducer,
  cart: addtoCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
