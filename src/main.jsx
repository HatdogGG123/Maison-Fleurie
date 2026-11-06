import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { CheckoutProvider } from "./context/CheckoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <CheckoutProvider>
          <App />
        </CheckoutProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
