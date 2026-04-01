"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import SneakerCard from "../../components/SneakerCard";
import { sneakers } from "../../data/sneakers";

export default function SneakersPage() {
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");

  let displayedSneakers = [...sneakers];

  if (filterBy !== "all") {
    displayedSneakers = displayedSneakers.filter(
      (shoe) => shoe.brand?.toLowerCase() === filterBy.toLowerCase()
    );
  }

  if (sortBy === "low") {
    displayedSneakers.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high") {
    displayedSneakers.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    displayedSneakers.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div
      style={{
        background: "#e9e9e9",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1
          style={{
            fontSize: "28px",
            color: "#000",
            marginBottom: "10px",
          }}
        >
          All Sneakers
        </h1>

        <p
          style={{
            color: "#000",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Browse the latest sneaker collection.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "25px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ color: "#000", fontWeight: "bold" }}>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ color: "#000", fontWeight: "bold" }}>Filter by:</label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <option value="all">All</option>
              <option value="Nike">Nike</option>
              <option value="Jordan">Jordan</option>
              <option value="Yeezy">Yeezy</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {displayedSneakers.map((shoe) => (
            <SneakerCard key={shoe.id} sneaker={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
}