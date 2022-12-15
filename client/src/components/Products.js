import FilterSection from "./FilterSection";
import Sort from "./Sort"
import ProductList from "./ProductList"

const Products = () => {



  return (
    <>

    <div className="container">
    <div className="row m-5">
      <div className="col-3 border">
        <FilterSection/>
      </div>
      <div className="col border">
<section className="product-view--sort">
  <div className="sort-filter">
    <Sort/>
  </div>
  <div className="main-product">
    <ProductList />
  </div>
</section>
      </div>
    </div>
    </div>
    </>)
}

export default Products