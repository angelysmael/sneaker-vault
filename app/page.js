"use client";

import { useState } from "react";
import SneakerCard from "../components/SneakerCard";
import { sneakers } from "../data/sneakers";
import Navbar from "../components/Navbar";

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (sneaker) => {
    setFavorites([...favorites, sneaker]);
  };

  return (
    <div style={{ 
      background: "#ffffff", 
      color: "white", 
      minHeight: "100vh" 
    }}>
      <Navbar />

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px"
      }}>
        
        {/* LEFT SIDE TEXT */}
        <div>
          <h1 style={{ fontSize: "100px", marginBottom: "10px", color: "#000000", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
            STEP INTO <br /> STYLE
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#000000" }}>
            Discover the latest sneakers 🔥
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <img 
          src="/sneaker.png"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "40px"
      }}>
        {sneakers.map((s) => (
<SneakerCard 
  key={s.id} 
  sneaker={s} 
  addToFavorites={addToFavorites}
/>
        ))}
    
      </div>
    </div>
  );
}
