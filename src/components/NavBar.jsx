import React from "react";

function NavBar({ cartItemCount = 0 }) {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "30px" }}>
          Ecommerce Shop Using UseState and Props
        </h1>
        <span style={{ fontSize: "24px", cursor: "pointer" }}>🛒</span>

        {cartItemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartItemCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default NavBar;
