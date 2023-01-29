import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="69200288198-cmc5o9jpi4ekj62niu11i6454n4dfs8f.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

