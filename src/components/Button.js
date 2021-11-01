import React from "react";
import ModeContext from "../ModeContext";
import { useContext } from "react";

function Button() {
  const ctx = useContext(ModeContext);
  return (
    <button onClick={ctx.toggleMode}>
      {ctx.mode}{" "}
      {(ctx.mode === "Day" && <i class="fas fa-sun"></i>) || (
        <i class="fas fa-moon"></i>
      )}
    </button>
  );
}

export default Button;
