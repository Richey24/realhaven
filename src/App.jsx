import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import Fallback from "./utils/Fallback";

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
                      <Fallback />
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
