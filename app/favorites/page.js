"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    };

    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);
    window.addEventListener("storage", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
      window.removeEventListener("storage", loadFavorites);
    };
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((shoe) => shoe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const clearAll = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        color: "black",
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
      }}
    >
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Your Favorites ❤️</h1>

        <button
          onClick={clearAll}
          style={{
            margin: "20px 0",
            padding: "10px 20px",
            background: "#555",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#777")}
          onMouseLeave={(e) => (e.target.style.background = "#555")}
        >
          Clear All
        </button>

        {favorites.length === 0 ? (
          <p>No favorites yet :(</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {favorites.map((shoe) => (
              <div
                key={shoe.id}
                style={{
                  background: "#1a1a1a",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
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
                    src={shoe.image}
                    alt={shoe.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h3>{shoe.name}</h3>
                <p>${shoe.price}</p>

                <button
                  onClick={() => removeFromFavorites(shoe.id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 14px",
                    background: "#ff4d4d",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}