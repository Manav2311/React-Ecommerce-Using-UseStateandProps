import React from "react";


function ProductsCard({ product, onAddToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: '250px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(236, 209, 209, 0.1)',
    textAlign: 'center',
    margin: '20px 0',
    backgroundColor: '#3a3c3b',
  },
  image: {
    width: '100%',
    // height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  name: {
    fontSize: '18px',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    color: '#888',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductsCard;
