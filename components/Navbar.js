"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const linkStyle = (name) => ({
    textDecoration: "none",
    color: hovered === name ? "#ff4d4d" : "white",
    transition: "0.3s",
    cursor: "pointer"
  });

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      background: "#0d0d0d",
      color: "white",
      borderBottom: "1px solid #222",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    }}>
      
      <h2>SneakerVault</h2>

      <div style={{
        display: "flex",
        gap: "30px"
      }}>
        <Link 
          href="/" 
          style={linkStyle("home")}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </Link>

        <Link 
          href="/sneakers" 
          style={linkStyle("sneakers")}
          onMouseEnter={() => setHovered("sneakers")}
          onMouseLeave={() => setHovered(null)}
        >
          Sneakers
        </Link>

        <Link 
          href="/favorites" 
          style={linkStyle("favorites")}
          onMouseEnter={() => setHovered("favorites")}
          onMouseLeave={() => setHovered(null)}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}