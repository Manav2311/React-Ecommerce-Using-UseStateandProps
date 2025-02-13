import React from "react";


function NavBar({ cartItemCount }) {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>E-commerce</h1>
      <div style={styles.cart}>
        <span>Cart ({cartItemCount})</span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#343a40',
    color: '#fff',
  },
  brand: {
    fontSize: '24px',
  },
  cart: {
    fontSize: '18px',
  },
};


export default NavBar;
