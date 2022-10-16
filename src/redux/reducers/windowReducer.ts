import { createSlice } from '@reduxjs/toolkit';

const windowReducer = createSlice({
  name: 'window',
  initialState: {
    isMobile: undefined,
    windowWidth: undefined,
  },
  reducers: {
    setMobile(state, action) {
      state.isMobile = action.payload.isMobile;
      state.windowWidth = action.payload.windowWidth;
    },
  },
});

const { reducer, actions } = windowReducer;
export const { setMobile } = actions;

export default reducer;
