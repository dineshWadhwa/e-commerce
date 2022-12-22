import React from "react";
import { useFilterContext } from "./Context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  // to get unique data of each field
  const getUniqueData = (data, property) => {
    let newVal = data.map((e) => {
      return e[property];
    });
    return (newVal = ["all", ...new Set(newVal)]);
    // console.log(newVal);
  };

  //we need TO HAVE the individual data of exh in array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");

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

        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
          <div className="filter-company">
            <h3>Company</h3>
            <form action="#">
              <select
                name="company"
                id="company"
                className="filter-company--select"
                onClick={updateFilterValue}
              >
                {companyData.map((curElem, index) => {
                  return (
                    <option key={index} value={curElem} name="company">
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
