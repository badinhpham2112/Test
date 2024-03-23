import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {login} from '../../service/UserSevice'

export const fetLoginUser = createAsyncThunk(
  'users/fetLoginUser',
  async (name, thunkAPI) => {
    try {
      const res = await login(name);
      if (res && res.data.access_token) {
        localStorage.setItem('token', res.data.access_token);
        return { name: name, auth: true }; // Trả về một object chứa dữ liệu cần thiết
      } else {
        throw new Error("không tìm thấy access token");
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); // Xử lý lỗi và trả về giá trị mặc định
    }
  }
);

const initialState = {
  name: '',
  auth: false,
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
