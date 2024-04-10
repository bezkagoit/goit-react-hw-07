import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: { name: "" },
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори Action Creator
export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.name;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
