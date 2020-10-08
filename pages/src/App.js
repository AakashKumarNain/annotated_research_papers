import React from "react";
import "./App.css";
import papers from "./papers.json";

function App() {
  const categories = [...new Set(papers.map((item) => item.category))];

  return (
    <div style={{ margin: "20px" }}>
      <h1>Annotated Research Papers</h1>
      <p>
        Research papers annotated by{" "}
        <a href="https://github.com/AakashKumarNain">Aakash Kumar Nain</a>.
      </p>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {papers
              .filter((paper) => paper.category === category)
              .map((paper) => (
                <li key={paper.path}>
                  <p>
                    <a href={process.env.PUBLIC_URL + paper.path}>{paper.title}</a>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
