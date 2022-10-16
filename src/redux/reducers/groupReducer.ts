import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const groupReducer = createSlice({
  name: 'group',
  initialState: {
    selected: '',
    userGroup: '',
  },
  reducers: {
    setSelectedGroup(state, { payload }) {
      state.selected = payload;
    },
    setUserGroup(state, { payload }) {
      state.userGroup = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => {
      return groupReducer.getInitialState();
    });
  },
});

const { reducer, actions } = groupReducer;
export const { setSelectedGroup, setUserGroup } = actions;

export default reducer;
