import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel}>
        <span className={css.searchSpan}>Find contacts by name</span>
        <input
          className={css.searchInput}
          type="text"
          value={searchInput}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
