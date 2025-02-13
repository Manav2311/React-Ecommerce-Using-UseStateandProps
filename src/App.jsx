import { useState } from "react";
import "./App.css";
import ProductsCard from "./components/ProductsCard";
import ProductsCart from "./components/ProductsCart";
import NavBar from "./components/NavBar";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 34545,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Mobile",
      price: 3455,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Pc",
      price: 3423545,
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const cartItemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onAddToCart = (product) => {
    setCartItem((previsItems) => {
      const existingItem = previsItems.find((item) => item.id === product.id);

      if (existingItem) {
        // true
        return previsItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...previsItems, { ...product, quantity: 1 }];
    });
  };

  const removeCartItem = (productId) => {
    setCartItem((cards) => cards.filter((item) => item.id !== productId));
  };
  

  const onRemoveFromCart = (productId) => {
    setCartItem((card) => {
      return card
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 }; 
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <NavBar cartItemCount={cartItemCount} />
      <h1 style={{ textAlign: "center" }}>Eccomerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <ProductsCart items={cartItem} removeCartItem ={removeCartItem} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}

export default App;
