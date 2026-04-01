"use client";

import SneakerCard from "../components/SneakerCard";
import { sneakers } from "../data/sneakers";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "white",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Hero section (title + image) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Text section */}
        <div style={{ flex: "1 1 400px" }}>
          <h1
            style={{
              fontSize: "100px",
              marginBottom: "10px",
              color: "#000000",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              lineHeight: "0.95",
            }}
          >
            STEP INTO <br /> STYLE
          </h1>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Discover the latest sneakers 🔥
          </p>
        </div>

        {/* Hero image */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/sneaker-vault" : ""
            }/sneaker.png`}
            alt="Sneaker collage"
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Sneaker cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Loop through sneakers and display each card */}
        {sneakers.filter(Boolean).map((s) => (
          <SneakerCard key={s.id} sneaker={s} />
        ))}
      </div>


    </div>
  );
}