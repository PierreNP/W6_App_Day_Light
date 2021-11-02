import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CaseStudy from "../../components/CaseStudy";
import caseStudiesList from "../../CaseStudiesList";
import DisplayContext from "../../DisplayContext";
import Button2 from "../../components/Button2";

const Works = () => {
  const markdown = `### Au fil des années, nous avons pu accompagner les meilleurs.

  Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.`;

  const [display, setDisplay] = useState("list");

  return (
    <div>
      <h1>Works</h1>
      <DisplayContext.Provider
        value={{
          display: display,
          changeDisplay: () => {
            if (display === "list") setDisplay("card");
            else setDisplay("list");
          },
        }}
      >
        <Button2 />
      </DisplayContext.Provider>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <Router>
        <nav className={`sub-navigation ${display}`}>
          {caseStudiesList.map((caseStudy) => (
            <div className="case-study">
              <ReactMarkdown className="bold-link">
                {caseStudy.client}
              </ReactMarkdown>
              {display === "card" && (
                <p>{caseStudy.markdown.split("\n")[0].slice(3)}</p>
              )}
              <Link
                to={
                  "/works/" +
                  caseStudy.client[0].toLowerCase() +
                  caseStudy.client.slice(1) +
                  "-study-case"
                }
              >
                Voir plus
              </Link>
            </div>
          ))}
        </nav>
        <Switch>
          <Route path="/works/:client-study-case">
            <CaseStudy />
          </Route>
          <Route path="/works">
            <h3>Veuillez sélectionner un projet !</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Works;
