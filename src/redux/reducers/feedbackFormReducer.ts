import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const feedbackFormReducer = createSlice({
  name: 'feedbackForm',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setFeedbackFormOpen(state, { payload }) {
      state.isOpen = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => {
      return feedbackFormReducer.getInitialState();
    });
  },
});

const { reducer, actions } = feedbackFormReducer;
export const { setFeedbackFormOpen } = actions;

export default reducer;
