import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const loginModalReducer = createSlice({
  name: 'loginModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setLoginModalOpen(state, { payload }) {
      state.isOpen = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => {
      return loginModalReducer.getInitialState();
    });
  },
});

const { reducer, actions } = loginModalReducer;
export const { setLoginModalOpen } = actions;

export default reducer;
