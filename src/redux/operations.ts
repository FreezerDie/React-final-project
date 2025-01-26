import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types";
import { AppDispatch, RootState } from "./store";

axios.defaults.baseURL = "http://localhost:3001";

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: any;
  }
>("products/fetchProducts", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
