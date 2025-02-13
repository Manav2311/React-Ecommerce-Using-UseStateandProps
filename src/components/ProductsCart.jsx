import React from "react";

function ProductsCart({ items, onAddToCart, onRemoveFromCart, removeCartItem }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.cart}>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={styles.cartRow}>
          {items.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div style={styles.quantityControl}>
                  <button onClick={() => onRemoveFromCart(item.id)} style={styles.quantityButton}>-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => onAddToCart(item)} style={styles.quantityButton}>+</button>
                </div>
                <button onClick={() => removeCartItem(item.id)} style={styles.removeButton}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

const styles = {
  cart: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(226, 200, 200, 0.1)",
  },
  cartRow: {
    display: "flex",
    // overflowX: "auto",
    gap: "15px",
    // width: '100%',
    paddingBottom: "10px",
  },
  cartItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    Width: "350px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#3a3c3b",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  details: {
    textAlign: "center",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  quantityButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0px 8px",
  },
  removeButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


export default ProductsCart;
