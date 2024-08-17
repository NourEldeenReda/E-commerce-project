import Navigation from "./Components//Navigation/Nav";
import Products from "./Components//Products/Products";
import Recommended from "./Components//Recommended/Recommended";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";
//data
import Product from "./Components/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Fetch products data from json-server

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //-----------input Filter-----------------

  const filteredItems = products.filter(
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

  const result = filteredData(products, selectedCategory, query);

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
