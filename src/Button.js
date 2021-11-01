import React from "react";
import ModeContext from "./ModeContext";
import { useContext } from "react";

function Button() {
  const ctx = useContext(ModeContext);
  return <button onClick={ctx.toggleMode}>{ctx.mode}</button>;
}

export default Button;
