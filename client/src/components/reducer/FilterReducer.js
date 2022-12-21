const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sortValue = userSortValue.value;
      console.log("sortValue", sortValue);
      return {
        ...state,
        sorting_value: sortValue,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      if (state.sorting_value === "default") {
        newSortData = tempSortProduct}

      if (state.sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (state.sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (state.sorting_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => a.price - b.price);
      }

      if (state.sorting_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => b.price - a.price);
      }
      
      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default FilterReducer;
