import "./App.css";
import Agent from "./Agent/Agent"
import { useEffect, useState } from 'react';
import Main from "./Homepage/Hero/Main";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import url from "./url";

function App() {
  const [spin, setSpin] = useState(true)
  const [properties, setProp] = useState([])
  const [recommend, setRecommend] = useState([])

  useEffect(() => {
    if (window.location.hostname.split('.')[0] === "www" || window.location.hostname.split('.')[0] === "localhost") {
      (async () => {
        const house = await axios.get(`${url}/v1/property/find`)
        const result = await house.data
        setProp(result.properties)
        window.navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a06ee162a5a1476a87cdbec1d7c4f197`)
          const loc = await res.data
          const state = loc.results[0].components.state === "Federal Capital Territory" ? loc.results[0].components.state : loc.results[0].components.state.split(" ")[0]
          const city = loc.results[0].components.county
          sessionStorage.setItem("state", state)
          sessionStorage.setItem("city", city)
          const recCity = await axios.get(`${url}/v1/property/find?state=${state}&city=${city}`)
          const recoCity = await recCity.data
          if (recoCity.noOfProperties < 1) {
            const rec = await axios.get(`${url}/v1/property/find?state=${state}`)
            const reco = await rec.data
            if (reco.noOfProperties < 1) {
              setRecommend(result.properties)
            } else {
              setRecommend(reco.properties)
            }
          } else {
            setRecommend(recoCity.properties)
          }
        }, console.log("sad"))
      })()
      setSpin(false)
    }
  }, [])

  let lastScroll = window.scrollY || document.documentElement.scrollTop
  window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
      const script = document.createElement("script")
      script.src = "//code.tidio.co/shcjw82xbopd8qzdqjscd7vuirxnjm0p.js"
      script.async = true
      if (document.getElementById("app") !== null) {
        document.getElementById("app").appendChild(script)
      }
    }
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

  if (window.location.hostname.split('.')[0] !== "www" && window.location.hostname.split('.')[0] !== "localhost") {
    return (
      <div>
        <Agent />
      </div>
    )
  }

  if (spin) {
    return (
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
    )
  }

  return (
    <div id="app" className="App">
      <Main recommend={recommend} properties={properties} />
    </div>
  )
}

export default App;
