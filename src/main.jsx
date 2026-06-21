import "./index.css";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/system";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeroUIProvider>
  </React.StrictMode>,
);
