import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by{" "}
          <a
            href="https://www.martilda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mARTilda
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/mARTilda-art/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
