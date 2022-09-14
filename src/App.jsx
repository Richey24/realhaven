import "./App.css";
import MobileMain from "./Homepage/Mobile/MobileMain";
import { useEffect, useState } from 'react';
import DesktopMain from "./Homepage/Desktop/DesktopMain";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import url from "./url";

function App() {
  const [large, setLarge] = useState(false)
  const [size, setSize] = useState(window.innerWidth)
  const [spin, setSpin] = useState(true)
  const [properties, setProp] = useState([])
  useEffect(() => {
    if (window.innerWidth >= 800) {
      setLarge(true)
    } else {
      setLarge(false)
    }
    (async () => {
      const house = await axios.get(`${url}/v1/property/find`)
      const result = await house.data
      setProp(result.properties)
    })()
    setSpin(false)
  }, [size])

  window.addEventListener("resize", () => {
    window.innerWidth >= 1200 && setSize(window.innerWidth)
    window.innerWidth < 800 && window.innerWidth > 780 && setSize(window.innerWidth)
  })

  let lastScroll = window.scrollY || document.documentElement.scrollTop
  window.addEventListener("scroll", () => {
    if (!document.getElementById("fixedNav")) {
      return
    }
    const currentScroll = window.scrollY || document.documentElement.scrollTop
    if (currentScroll > lastScroll) {
      document.getElementById("fixedNav").style.transition = "ease-out 1s"
      document.getElementById("fixedNav").style.visibility = "hidden"
    } else {
      document.getElementById("fixedNav").style.transition = "ease-in 1s"
      document.getElementById("fixedNav").style.visibility = "visible"
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll
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
        {large ?
          (<DesktopMain properties={properties} />) :
          (<MobileMain properties={properties} />)}
      </div>
  )
}

export default App;
