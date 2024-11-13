import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

hydrateRoot(
  rootElement,
  <StrictMode>
    <App />
  </StrictMode>
);
