import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Works">Works</Link>
      <Button />
    </nav>
  );
}
