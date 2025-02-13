import React from "react";


function Products({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ margin: "10px 0" }}>{product.name} </h3>

      <p style={{ color: "#666" }}> ${product.price} </p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Add To cart
      </button>
    </div>
  );
}

export default Products;
