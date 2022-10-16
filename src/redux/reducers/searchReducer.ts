import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../actions/logoutAction';

const searchReducer = createSlice({
  name: 'search',
  initialState: {
    isFiltersOpen: false,
    mainFilters: {
      costFrom: 0,
      costTo: 0,
      brands: null,
      tags: null,
      categories: [],
      characteristics: null,
    },

    secondaryFilters: 'По умолчанию',
  },
  reducers: {
    setFiltersOpen(state, { payload }) {
      state.isFiltersOpen = payload;
    },
    setFilterCostFrom(state, { payload }) {
      state.mainFilters.costFrom = payload;
    },
    setFilterCostTo(state, { payload }) {
      state.mainFilters.costTo = payload;
    },
    setBrands(state, { payload }) {
      state.mainFilters.brands = payload;
    },
    setTags(state, { payload }) {
      state.mainFilters.tags = payload;
    },
    setCategories(state, { payload }) {
      state.mainFilters.categories = payload;
    },
    setCharacteristics(state, { payload }) {
      state.mainFilters.characteristics = payload;
    },
    setSecondaryFilters(state, { payload }) {
      state.secondaryFilters = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => {
      return searchReducer.getInitialState();
    });
  },
});

const { reducer, actions } = searchReducer;
export const {
  setFilterCostFrom,
  setFilterCostTo,
  setFiltersOpen,
  setBrands,
  setTags,
  setCategories,
  setCharacteristics,
  setSecondaryFilters,
} = actions;

export default reducer;
