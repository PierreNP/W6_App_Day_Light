import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import caseStudiesList from "./CaseStudiesList";

function Book() {
  const { client } = useParams();
  const [currentCaseStudy, setCurrentCaseStudy] = useState(undefined);

  useEffect(() => {
    const foundStudy = caseStudiesList.find(
      (caseStudy) => caseStudy.client === client
    );
    setCurrentCaseStudy(foundStudy);
  }, [client]);

  return (
    <>
      {currentCaseStudy === undefined && <p>Veuillez </p>}
      {currentCaseStudy && (
        <div>
          <div>{currentCaseStudy.client}</div>
          <div>{currentCaseStudy.markdown}</div>
        </div>
      )}
    </>
  );
}

export default Book;