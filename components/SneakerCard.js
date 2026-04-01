"use client";

import { useEffect, useState } from "react";

export default function SneakerCard({ sneaker }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const loadFavoriteStatus = () => {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
      const exists = stored.some((item) => item.id === sneaker.id);
      setAdded(exists);
    };

    loadFavoriteStatus();

    window.addEventListener("favoritesUpdated", loadFavoriteStatus);
    window.addEventListener("storage", loadFavoriteStatus);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavoriteStatus);
      window.removeEventListener("storage", loadFavoriteStatus);
    };
  }, [sneaker.id]);

  const handleFavoriteToggle = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.some((item) => item.id === sneaker.id);

    let updated;

    if (exists) {
      updated = stored.filter((item) => item.id !== sneaker.id);
      setAdded(false);
    } else {
      updated = [...stored, sneaker];
      setAdded(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesUpdated"));
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
        onClick={handleFavoriteToggle}
        style={{
          marginTop: "10px",
          padding: "10px",
          background: added ? "#666" : "#ff4d4d",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {added ? "Added ❤️" : "Add to Favorites ❤️"}
      </button>
    </div>
  );
}