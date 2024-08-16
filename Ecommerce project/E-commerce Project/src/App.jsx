import Navigation from "./Components//Navigation/Nav";
import Products from "./Components//Products/Products";
import Recommended from "./Components//Recommended/Recommended";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useState } from "react";
//data
import ProductsData from "./Data/Data";
import Product from "./Components/Product";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-----------input Filter-----------------

  const filteredItems = ProductsData.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({ id, img, title, newPrice, discount }) => (
      <Product
        key={id}
        img={img}
        title={title}
        newPrice={newPrice}
        discount={discount}
      />
    ));
  }

  const result = filteredData(ProductsData, selectedCategory, query);

  return (
    <>
      <Navigation query={query} setQuery={setQuery} />
      <div className="app-container d-flex">
        <Sidebar setSelectedCategory={setSelectedCategory} />
        <div className="main-content flex-grow-1">
          <Recommended setSelectedCategory={setSelectedCategory} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
