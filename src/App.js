import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Works from "./pages/Works/index";
import ModeContext from "./ModeContext";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "Day");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === "Day") {
      setMode("Night");
    } else {
      setMode("Day");
    }
    console.log("toggle !");
  };

  return (
    <ModeContext.Provider value={{ mode: mode, toggleMode: toggleMode }}>
      <div className={mode}>
        <Router>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
