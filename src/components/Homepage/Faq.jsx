import "./Faq.css"
import faq from "../../img/faq.svg"
import down from "../../img/Icon.svg"
import { useState } from "react"

const Faq = () => {
    const [active, setActive] = useState(1)

    const getActive = (num) => {
        if (active === num) {
            setActive(0)
        } else {
            setActive(num)
        }
    }

    return (
        <div className="heroSixth">
            <div className="heroSixthInner">
                <div className="innerHeroSixth">
                    <h1>Some of the things you may want to know</h1>
                    <p>We answered questions so you don’t have to ask them.</p>
                    <img loading="lazy" src={faq} alt="" />
                </div>
                <div className="faqQuestions">
                    <div>
                        <h6 onClick={() => getActive(1)}>Is Haven only available in Nigeria? <img src={down} alt="" /></h6>
                        <p className={active === 1 ? "show" : "hiddenFaq"} id="firstFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => getActive(2)}>Can anyone become an agent? <img src={down} alt="" /></h6>
                        <p id="secondFaq" className={active === 2 ? "show" : "hiddenFaq"}>We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => getActive(3)}>Is Haven subscription based? <img src={down} alt="" /></h6>
                        <p id="thirdFaq" className={active === 3 ? "show" : "hiddenFaq"}>We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => getActive(4)}>Is Haven free for agents? <img src={down} alt="" /></h6>
                        <p id="fourthFaq" className={active === 4 ? "show" : "hiddenFaq"}>We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => getActive(5)}>What do i need to open an agent account? <img src={down} alt="" /></h6>
                        <p id="fifthFaq" className={active === 5 ? "show" : "hiddenFaq"}>We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq