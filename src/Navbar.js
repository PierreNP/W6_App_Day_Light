import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">L'agence</Link>
      <Link to="/works">Projets</Link>
      <Button />
    </nav>
  );
}
