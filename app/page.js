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
      <Navbar />

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
        {sneakers.filter(Boolean).map((s) => (
          <SneakerCard key={s.id} sneaker={s} />
        ))}
      </div>

      <img
        src={`${
          process.env.NODE_ENV === "production" ? "/sneaker-vault" : ""
        }/sneaker.gif`}
        alt="Floating sneaker"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "220px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
