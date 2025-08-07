import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ContextMainProvider } from "./context/ContextMain";
import "./StylesPage/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ContextMainProvider>
        <App />
      </ContextMainProvider>
    </HashRouter>
  </StrictMode>
);
