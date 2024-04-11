import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори Action Creator
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
