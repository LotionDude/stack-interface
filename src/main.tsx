import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/global.css";
import "@/styles/icons.css";
import "@/styles/editor.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
