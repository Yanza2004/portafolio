import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextMainProvider } from "./context/ContextMain";
import "./StylesPage/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextMainProvider>
        <App />
      </ContextMainProvider>
    </BrowserRouter>
  </StrictMode>
);
