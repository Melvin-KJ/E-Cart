import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//action return promise
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const result = await axios.get('https://dummyjson.com/products');
    console.log(result);
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
  },
  reducers: {},
});

export default productSlice.reducer;
