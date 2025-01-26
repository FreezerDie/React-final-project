import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    Products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
