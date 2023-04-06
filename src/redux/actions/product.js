import axios from "axios";
import { server } from "../../server";

// Create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductCreateRequest",
    });

    const config = { headers: { "Content-type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config,
    );
    dispatch({
      type: "ProductCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "ProductCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Get All Products
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductCreateRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`,
    );

    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductShopFailed",
      payload: error.response.data.message,
    });
  }
};

// Delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      },
    );
    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};
