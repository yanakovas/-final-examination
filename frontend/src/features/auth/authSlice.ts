import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/State';
import * as api from './api'
import Credentials from './types/Credentials';


const initialState: AuthState  = {
  user: undefined,
  authChecked: false,
} 

export const userChecked = createAsyncThunk(
  'auth/userChecked',
  async () => {
    const user = await api.checkUser();
    return user;
  }
)

export const loginSuccess = createAsyncThunk (
  'auth/loginSuccess',
  async (credentials: Credentials ) => {
    const user  = await api.login(credentials);
    console.log(user)
    return user;
      }
)

export const logoutSuccess = createAsyncThunk (
  'auth/logout',
  async () => {
   await api.logout();
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(userChecked.fulfilled, (state, action) => {
        const result = action.payload;
        console.log(result);
        if (result.isLoggedIn) {
          state.user = result.user
          state.authChecked = true
        } 
    })
    .addCase(userChecked.rejected, (state, action) => {
         state.authChecked = false
    })
    .addCase(loginSuccess.fulfilled, ( state, action) => {
      const data = action.payload;
      if (data.error) {state.user = undefined} 
      if (data.error) {state.createError = action.payload.error} 
      else { state.user = data}
    })
    .addCase(loginSuccess.rejected, (state, action) => {
      
    })
     .addCase(logoutSuccess.fulfilled, ( state, action ) => {
      state.user = undefined
     })
  }
});

export default authSlice.reducer;
