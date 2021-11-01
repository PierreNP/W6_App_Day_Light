import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import caseStudiesList from "../CaseStudiesList";
import ReactMarkdown from "react-markdown";

function CaseStudy() {
  const { client } = useParams();
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null);

  useEffect(() => {
    const foundStudy = caseStudiesList.find(
      (caseStudy) => caseStudy.client.toLowerCase() === client
    );
    setCurrentCaseStudy(foundStudy);
  }, [client]);

  return (
    <>
      {currentCaseStudy && (
        <div>
          <ReactMarkdown>{"# " + currentCaseStudy.client}</ReactMarkdown>
          <ReactMarkdown>{currentCaseStudy.markdown}</ReactMarkdown>
        </div>
      )}
    </>
  );
}

export default CaseStudy;
