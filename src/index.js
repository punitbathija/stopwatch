import React from "react";
import ReactDOM from "react-dom/client";
import { Hooks } from "./Hooks";
import ProgressBar from "./ProgressBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Hooks />
      <ProgressBar />
    </>
  </React.StrictMode>
);
