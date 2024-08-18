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
  const [selectedCategory, setSelectedCategory] = useState([]);
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

  function filteredData(products, selectedCategories, query) {
    let filteredProducts = products;

    // Filter by query (search input)
    if (query) {
      filteredProducts = filteredItems;
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.some((selected) => {
          if (selected === "") {
            return true; // If "All" is selected, include all products
          } else if (parseInt(selected)) {
            // Handle price filtering
            return product.price == selected;
          } else {
            // Handle other filters (color, brand, etc.)
            return (
              product.category === selected ||
              product.color === selected ||
              product.brand === selected ||
              product.title === selected
            );
          }
        })
      );
    }

    return filteredProducts.map(({ id, img, title, price, discount }) => (
      <Product
        key={id}
        img={img}
        title={title}
        price={price}
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
