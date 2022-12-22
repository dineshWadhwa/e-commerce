import React from "react";
import { useFilterContext } from "./Context/FilterContext";

const FilterSection = () => {
  const {filters:{text},updateFilterValue} = useFilterContext();
  return (
    <>
      <div className="filter-section">
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="SEARCH"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
