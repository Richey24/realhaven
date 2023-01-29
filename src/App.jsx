import React from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
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
                    {route.element}
                  </React.Suspense>
                }
              />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
