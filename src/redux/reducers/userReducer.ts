import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const initialState = {
  id: '',
  avatar: '',
  firstName: '',
  lastName: '',
  email: '',
  group: '',
  phone: '',
  role: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      for (let key in payload) {
        //@ts-ignore
        state[key] = payload[key];
      }
    },
    updateUser(state, { payload }) {
      for (let key in payload) {
        //@ts-ignore
        state[key] = payload[key];
      }
    },
    clearUser() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

const { reducer, actions } = userReducer;
export const { setUser, updateUser, clearUser } = actions;

export default reducer;
