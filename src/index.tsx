import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScormProvider from "./ScormContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ScormProvider>
      <App />
    </ScormProvider>
  </React.StrictMode>
);
