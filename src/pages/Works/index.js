import React from "react";
import ReactMarkdown from "react-markdown";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Book from "../../CaseStudy";
import caseStudiesList from "../../CaseStudiesList";

const Works = () => {
  const markdown = `### Au fil des années, nous avons pu accompagner les meilleurs.

  Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.`;

  return (
    <div>
      <h1>Works</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <Router>
        <nav>
          {caseStudiesList.map((caseStudy) => (
            <Link
              to={
                "/works/" +
                caseStudy.client[0].toLowerCase() +
                caseStudy.client.slice(1) +
                "-study-case"
              }
            >
              <ReactMarkdown>{caseStudy.client}</ReactMarkdown>
            </Link>
          ))}
        </nav>
        <Switch>
          <Route path="/works/:client-study-case">
            <Book />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Works;
