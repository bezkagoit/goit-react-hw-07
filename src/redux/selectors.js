import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    if (filter && filter.trim() !== "") {
      return items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return items;
    }
  }
);
