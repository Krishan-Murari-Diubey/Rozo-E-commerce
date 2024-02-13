import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser,checkUser } from './AuthAPI';

const initialState = {
  status: 'idle',
  error:null,
  loggedInUser: null,
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    console.log(userData)
    const response = await createUser(userData);
    
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    increment: (state) => {

      state.value += 1;
    },

  },
  
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      }) 
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
  
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectError = (state)=>state.auth.error;
export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export default counterSlice.reducer;