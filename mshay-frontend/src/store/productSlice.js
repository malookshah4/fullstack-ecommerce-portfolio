import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import axios from "axios";

const API_URL = "http://localhost:8000/api/products";


export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await axios.get(API_URL);
  // FIX 1: The data is directly in response.data
  console.log("Data from /api/products:", response.data);
  return response.data;
});

// Renamed for consistency with the component that uses it
export const fetchProductById = createAsyncThunk(
  "products/fetchById", // Changed name for consistency
  async (productId) => {
    const response = await axios.get(`${API_URL}/${productId}`);
    // FIX 2: The single product object is directly in response.data
    console.log(`Data from /api/products/${productId}:`, response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productList.status = "Loading";
        console.log(`print in fetchprodcs Loading`);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList.status = "succeeded";
        state.productList.items = action.payload.items;
        console.log(`print in succes ${action.payload}`);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productList.status = "failed";
        state.productList.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productDetails.status = "Loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetails.status = "succeeded";
        state.productDetails = { ...action.payload, status: "succeeded" };
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productDetails.status = "failed";
        state.productDetails.error = action.error.message;
      });
  },
});

export const { setProductDetails } = productSlice.actions;
export default productSlice.reducer;
