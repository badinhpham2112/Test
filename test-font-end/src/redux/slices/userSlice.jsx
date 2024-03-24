import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {login} from '../../service/UserSevice'

export const fetLoginUser = createAsyncThunk(
  'users/fetLoginUser',
  async (name, thunkAPI) => {
    try {
      const res = await login(name);
      if (res && res.data.access_token) {
        console.log(res)
        localStorage.setItem('token', res.data.access_token);
        return { name: name, access_token: res.data.access_token, refresh_token: res.data.refresh_token, auth: true }; 
      } else {
        throw new Error("không tìm thấy access token");
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); 
    }
  }
);

const initialState = {
  name: '',
  auth: false,
  access_token: localStorage.getItem('access_token') || '',
  refresh_token: localStorage.getItem('refresh_token') || '',
  isLoading: false,
  isError: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetLoginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetLoginUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.access_token = action.payload.access_token
        state.refresh_token = action.payload.refresh_token
        state.auth = action.payload.auth;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
