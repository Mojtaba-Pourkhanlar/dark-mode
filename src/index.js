import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import './index.css'

// Theme
import { ThemeProvider } from "./frontend/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  </React.StrictMode>,
);
