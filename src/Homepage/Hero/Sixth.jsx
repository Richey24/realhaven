import "./Sixth.css"
import faq from "../../img/faq.svg"
import down from "../../img/Icon.svg"

const Sixth = () => {

    const toggleFaq = (val) => {
        if (val === "firstFaq") {
            document.getElementById(val).classList.toggle("hide")
        } else {
            document.getElementById(val).classList.toggle("show")
        }
    }

    return (
        <div className="heroSixth">
            <div className="heroSixthInner">
                <div className="innerHeroSixth">
                    <h1>Some of the things you may want to know</h1>
                    <p>We answered questions so you don’t have to ask them.</p>
                    <img src={faq} alt="" />
                </div>
                <div className="faqQuestions">
                    <div>
                        <h6 onClick={() => toggleFaq("firstFaq")}>Is Haven only available in Nigeria? <img src={down} alt="" /></h6>
                        <p id="firstFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => toggleFaq("secondFaq")}>Can anyone become an agent? <img src={down} alt="" /></h6>
                        <p id="secondFaq" className="hiddenFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => toggleFaq("thirdFaq")}>Is Haven subscription based? <img src={down} alt="" /></h6>
                        <p id="thirdFaq" className="hiddenFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => toggleFaq("fourthFaq")}>Is Haven free for agents? <img src={down} alt="" /></h6>
                        <p id="fourthFaq" className="hiddenFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                    <div>
                        <h6 onClick={() => toggleFaq("fifthFaq")}>What do i need to open an agent account? <img src={down} alt="" /></h6>
                        <p id="fifthFaq" className="hiddenFaq">We currently only serve registered businesses in Nigeria. We support sole agents, established agencies. However, If your business is not yet registered, Haven can help you get your real estate business registered on time with our partners.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sixth