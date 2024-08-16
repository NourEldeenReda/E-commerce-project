/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

const ProductCard = ({ result }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Ensure the current page doesn't exceed the total number of pages
  useEffect(() => {
    const totalPages = Math.ceil(result.length / productsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [result, currentPage, productsPerPage]);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = result.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(result.length / productsPerPage);

  // Handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-5 products-container">
        {currentProducts}
      </div>
      <div className="pagination justify-content-center mt-4">
        <button
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageClick(i + 1)}
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() =>
            currentPage < totalPages && handlePageClick(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
