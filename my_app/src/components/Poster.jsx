// src/components/Poster.jsx
import React from "react";

export default function Poster({ src, alt = "", size = "medium", className = "" }) {
  const sizeClass =
    size === "small" ? "poster-small" : size === "large" ? "poster-large" : "poster-medium";

  return <img src={src} alt={alt} className={`${sizeClass} ${className} img-fluid`} />;
}
