import { createContext } from "react";

const ModeContext = createContext({ mode: "", toggleMode: () => {} });

export default ModeContext;
