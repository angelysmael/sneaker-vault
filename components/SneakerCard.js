"use client";

import { useState, useEffect } from "react";

export default function SneakerCard({ sneaker }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.find((item) => item.id === sneaker.id);
    if (exists) {
      setAdded(true);
    }
  }, [sneaker.id]);

  const handleAdd = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!stored.find((item) => item.id === sneaker.id)) {
      const updated = [...stored, sneaker];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setAdded(true);
    }
  };

  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: "15px",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          height: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={sneaker.image}
          alt={sneaker.name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <h3>{sneaker.name}</h3>
      <p>${sneaker.price}</p>

      <button
        onClick={handleAdd}
        style={{
          marginTop: "10px",
          padding: "10px",
          background: added ? "gray" : "#ff4d4d",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
        }}
      >
        {added ? "Added ❤️" : "Add to Favorites ❤️"}
      </button>
    </div>
  );
}