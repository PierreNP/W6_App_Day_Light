import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.

De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  

Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.`;

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default About;
