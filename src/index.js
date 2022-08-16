import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = React.lazy(() => import("./App"));
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));
const DescMob = React.lazy(() => import("./Homepage/DescMob/DescMob"));
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const Listing = React.lazy(() => import("./Dashboard/Listing"));
const AddProp = React.lazy(() => import("./Dashboard/AddProp"));
const Reset = React.lazy(() => import("./Login/Reset"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="69200288198-cmc5o9jpi4ekj62niu11i6454n4dfs8f.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <App />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/desc"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <DescMob />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/listing"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <Listing />
            </React.Suspense>
          }
        />
        <Route
          path="/post"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <AddProp />
            </React.Suspense>
          }
        />
        <Route
          path="/reset/password/:token"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                </div>
              }
            >
              <Reset />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
