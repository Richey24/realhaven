import Hero from "./Hero"
import "./Main.css"
import Footer from "./Footer"
import BestProperties from "./BestProperties"
import Trending from "./Trending"
import Recommend from "./Recommend"
import Testimony from "./Testimony"
import Faq from "./Faq"
import Agent from "../Agent/Agent"

const Main = () => {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 2000) {
            const script = document.createElement("script")
            script.src = "//code.tidio.co/shcjw82xbopd8qzdqjscd7vuirxnjm0p.js"
            script.async = true
            if (document.getElementById("heroMain") !== null) {
                document.getElementById("heroMain").appendChild(script)
            }
        }
    })

    if (window.location.hostname.split('.')[0] !== "www" && window.location.hostname.split('.')[0] !== "localhost") {
        return (
            <div>
                <Agent />
            </div>
        )
    }

    return (
        <div id="heroMain" className="heroMain">
            <Hero />
            <BestProperties />
            <Trending />
            <Recommend />
            <Testimony />
            <Faq />
            <Footer />
        </div>
    )
}

export default Main