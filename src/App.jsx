import "./App.css";
import MobileMain from "./Homepage/Mobile/MobileMain";
import { useEffect, useState } from 'react';
import DesktopMain from "./Homepage/Desktop/DesktopMain";
import { Spinner } from "react-bootstrap";

function App() {
  const [large, setLarge] = useState(false)
  const [size, setSize] = useState(window.innerWidth)
  const [spin, setSpin] = useState(true)
  useEffect(() => {
    if (window.innerWidth >= 800) {
      setLarge(true)
    } else {
      setLarge(false)
    }
    setSpin(false)
  }, [size])

  window.addEventListener("resize", () => {
    window.innerWidth >= 1200 && setSize(window.innerWidth)
    window.innerWidth < 800 && window.innerWidth > 780 && setSize(window.innerWidth)
  })

  return (
    spin ?
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
      :
      <div className="App">
        {large ? <DesktopMain /> : <MobileMain />}
      </div>
  )
}

export default App;
