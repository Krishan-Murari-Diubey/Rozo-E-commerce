import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct, fetchProductsByFilters,fetchAllBrand,fetchAllCategories,fetchProductById } from './ProductAPI';

const initialState = {
  Products: [],
  Brand:[],
  Categories:[],
  status: 'idle',
  totalItems:0,
  selectedProduct:null,
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {
    try {
      const response = await fetchAllProduct();
      return response.data;
    } catch (error) {
    
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);
export const fetchAllProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilters(filter,sort,pagination);
    return response.data;
  }
);
export const fetchProductsByBrandAsync = createAsyncThunk(
  'product/fetchAllBrand',
  async () => {
    const response = await fetchAllBrand();
    return response.data;
  }
);
export const fetchProductsByCategoriesAsync = createAsyncThunk(
  'product/fetchAllCategories',
  async () => {
    const response = await fetchAllCategories();
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: 'product',  
  initialState,

  reducers: {
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Products = action.payload;
      }) 
       .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      }) 
       .addCase(fetchProductsByBrandAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByBrandAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Brand = action.payload;
      })
       .addCase(fetchProductsByCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Categories = action.payload;
      })
       .addCase(fetchAllProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
  },
});


export const selectAllProducts = (state) => state.product.Products;
export const selectBrand = (state) => state.product.Brand;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectCategories= (state) => state.product.Categories;
export const selectTotalItems = (state) => state.product.totalItems;
export default ProductSlice.reducer;
