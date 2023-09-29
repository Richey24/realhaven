import Hero from "../../components/Homepage/Hero"
import "./Main.css"
import Footer from "../../components/Homepage/Footer"
import BestProperties from "../../components/Homepage/BestProperties"
import Trending from "../../components/Homepage/Trending"
import Recommend from "../../components/Homepage/Recommend"
import Testimony from "../../components/Homepage/Testimony"
import Faq from "../../components/Homepage/Faq"
import Agent from "../Agent/Agent"

const Main = () => {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 2000) {
            const script = document.createElement("script")
            script.id = "chatScript"
            script.src = "//code.tidio.co/shcjw82xbopd8qzdqjscd7vuirxnjm0p.js"
            script.async = true
            if (document.getElementById("heroMain") !== null && !document.getElementById("chatScript")) {
                document.getElementById("heroMain").appendChild(script)
            }
        }
    })

    // if (window.location.hostname.split('.')[0] !== "www" && window.location.hostname.split('.')[0] !== "localhost") {
    //     return (
    //         <div>
    //             <Agent />
    //         </div>
    //     )
    // }

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
