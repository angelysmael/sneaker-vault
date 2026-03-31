"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import SneakerCard from "../../components/SneakerCard";
import { sneakers } from "../../data/sneakers";

export default function SneakersPage() {
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");

  const filteredAndSortedSneakers = useMemo(() => {
    let updatedSneakers = [...sneakers];

    if (filterBy === "nike") {
      updatedSneakers = updatedSneakers.filter((shoe) =>
        shoe.name.toLowerCase().includes("nike") ||
        shoe.name.toLowerCase().includes("air max") ||
        shoe.name.toLowerCase().includes("dunk") ||
        shoe.name.toLowerCase().includes("air force")
      );
    }

    if (filterBy === "jordan") {
      updatedSneakers = updatedSneakers.filter((shoe) =>
        shoe.name.toLowerCase().includes("jordan")
      );
    }

    if (filterBy === "yeezy") {
      updatedSneakers = updatedSneakers.filter((shoe) =>
        shoe.name.toLowerCase().includes("yeezy")
      );
    }

    if (sortBy === "low-high") {
      updatedSneakers.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high-low") {
      updatedSneakers.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "a-z") {
      updatedSneakers.sort((a, b) => a.name.localeCompare(b.name));
    }

    return updatedSneakers;
  }, [sortBy, filterBy]);

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
        <h1>All Sneakers</h1>
        <p>Browse the latest sneaker collection.</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <label style={{ marginRight: "10px" }}>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="a-z">Name: A to Z</option>
            </select>
          </div>

          <div>
            <label style={{ marginRight: "10px" }}>Filter by:</label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option value="all">All</option>
              <option value="nike">Nike</option>
              <option value="jordan">Jordan</option>
              <option value="yeezy">Yeezy</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {filteredAndSortedSneakers.map((s) => (
            <SneakerCard key={s.id} sneaker={s} />
          ))}
        </div>
      </div>
    </div>
  );
}