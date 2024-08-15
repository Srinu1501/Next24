import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ProductCard = ({ product }) => (
  <div className="product-card book-item">
    <img src={product.image} alt={product.title} width="200" />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
);

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-container">
      {console.log(products)}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductScreen;
