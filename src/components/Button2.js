import React from "react";
import DisplayContext from "../DisplayContext";
import { useContext } from "react";

function Button2() {
  const ctx = useContext(DisplayContext);
  return (
    <button onClick={ctx.changeDisplay}>
      {ctx.display}
      {(ctx.display === "list" && <i class="fas fa-list-ul"></i>) || (
        <i class="fas fa-layer-group"></i>
      )}
    </button>
  );
}

export default Button2;
