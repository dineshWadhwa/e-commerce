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
      // let userSortValue = document.getElementById("sort");
      // let sortValue = userSortValue.value;
      // console.log("sortValue", sortValue);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      if (sorting_value === "default") {
        newSortData = tempSortProduct;
      }

      if (sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (sorting_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => a.price - b.price);
      }

      if (state.sorting_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category , company} = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((e) =>
          e.name.toLowerCase().includes(text)
        );
      }
      // console.log(tempFilterProduct);
      if (category !== "all") {
        console.log(category,"check")
        tempFilterProduct = tempFilterProduct.filter((e) => {
          return e.category === category;
        });
      } 

      if (company !== "all") {
        console.log(company,"check2")
        tempFilterProduct = tempFilterProduct.filter((e) => {
          return e.company.toLowerCase() === company.toLowerCase();
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default FilterReducer;
