import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/judy-dionne-7a5093107/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Judy Dionne
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ju640/weatherappfinalproject"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
