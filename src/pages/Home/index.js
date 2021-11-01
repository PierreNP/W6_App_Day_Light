import React from "react";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const markdown = `### Confiez vos rêves à des experts du Web

  Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
  
  Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.`;

  return (
    <div className="home">
      <h1>Home</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Home;
