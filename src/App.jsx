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
      price: 80000,
      image:
      "https://dlcdnwebimgs.asus.com/gain/1011e6a8-271d-411f-935b-46309d3adcd4/",
    },
    {
      id: 2,
      name: "Mobile",
      price: 110000,
      image:
        "https://m.media-amazon.com/images/I/71lD7eGdW-L._SL1500_.jpg",
    },
    {
      id: 3,
      name: "Pc",
      price: 50000,
      image:
        "https://dlcdnwebimgs.asus.com/gain/b07a6f5f-b5d4-4ec8-b756-44d3ccc64fc3//fwebp",
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
      <strong style={{ textAlign: "center", fontSize:"60px",padding:"15px" }}>Lets Shop together </strong>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <strong style={{ textAlign: "center", fontSize:"60px",padding:"15px" }}>Shopping Cart </strong>
      <ProductsCart items={cartItem} removeCartItem ={removeCartItem} onRemoveFromCart={onRemoveFromCart}  onAddToCart={onAddToCart} />
    </div>
  );
}

export default App;
