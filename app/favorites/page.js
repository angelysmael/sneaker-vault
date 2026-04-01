"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function FavoritesPage() {
  // State to store all favorite sneakers
  const [favorites, setFavorites] = useState([]);

  // Runs once when the page loads
  useEffect(() => {
    // Function to load favorites from localStorage
    const loadFavorites = () => {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    };

    // Load favorites initially
    loadFavorites();

    // Listen for updates from other components/pages
    window.addEventListener("favoritesUpdated", loadFavorites);

    // Listen for changes across tabs (browser storage event)
    window.addEventListener("storage", loadFavorites);

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
      window.removeEventListener("storage", loadFavorites);
    };
  }, []);

  // Remove a single sneaker from favorites
  const removeFromFavorites = (id) => {
    // Filter out the selected sneaker
    const updatedFavorites = favorites.filter((shoe) => shoe.id !== id);

    // Update state
    setFavorites(updatedFavorites);

    // Save updated list to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Notify other components that favorites changed
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  // Clear all favorites
  const clearAll = () => {
    // Reset state
    setFavorites([]);

    // Remove favorites from localStorage
    localStorage.removeItem("favorites");

    // Notify other components
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

        {/* Button to clear all favorite items */}
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
          // Hover effect for better UI feedback
          onMouseEnter={(e) => (e.target.style.background = "#777")}
          onMouseLeave={(e) => (e.target.style.background = "#555")}
        >
          Clear All
        </button>

        {/* If no favorites exist, show message */}
        {favorites.length === 0 ? (
          <p>No favorites yet :(</p>
        ) : (
          // Grid layout for displaying favorite sneakers
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
                {/* Sneaker image container */}
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

                {/* Sneaker details */}
                <h3>{shoe.name}</h3>
                <p>${shoe.price}</p>

                {/* Remove button */}
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