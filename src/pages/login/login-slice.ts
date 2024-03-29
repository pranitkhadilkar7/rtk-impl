import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { LoginForm, LoginState } from './login-type'

const name = 'loginSlice'

const initialState: LoginState = {
  user: false,
}

export const loginUser = createAsyncThunk<any, LoginForm>(
  `${name}/loginUser`,
  async (payload, { rejectWithValue }) => {
    const respone = await fetch('http://localhost:3004/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await respone.json()
    if (data?.error) {
      return rejectWithValue(data)
    }
    return data
  }
)

const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    login: (state) => {
      state.user = true
    },
    logout: (state) => {
      state.user = false
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = true
    })
  },
})

export const { login, logout } = loginSlice.actions
export const selectLogin = (state: RootState) => state.login
export const loginReducer = loginSlice.reducer
