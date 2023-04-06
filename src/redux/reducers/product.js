import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  ProductCreateRequest: (state) => {
    state.isLoading = true;
  },

  ProductCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.product = action.payload;
  },

  ProductCreateFail: (state, action) => {
    state.isLoading = false;
    state.success = false;
    state.error = action.payload;
  },

  // Get All Product

  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },

  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },

  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Delete Product
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },

  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },

  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
