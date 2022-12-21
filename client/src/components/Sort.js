import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "./Context/FilterContext";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView ,sorting} =
    useFilterContext();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="sort-section">
        <div className="sorting-list">
          <button
            className={grid_view ? "sortactive sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <BsFillGridFill className="sorticon" />
          </button>
          <button
            className={!grid_view ? "sortactive sort-btn" : "sort-btn"}
            onClick={setListView}
          >
            <BsList className="sorticon" />
          </button>
        </div>
        <div className="product-data">
          <p>{`${filter_products.length}  Products Available`}</p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="default">Default</option>
              <option value="lowest">Prize(lowest)</option>
              <option value="highest">Prize(highest)</option>
              <option value="a-z"> Name(A-Z)</option>
              <option value="z-a"> Name(Z-A)</option>
            </select>
          </form>

        </div>
      </div>
    </>
  );
};

export default Sort;
