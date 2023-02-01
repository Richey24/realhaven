import Explore from "../../components/Agent/Explore"
import Members from "../../components/Agent/Members"
import Header from "../../components/Agent/Header"
import Featured from "../../components/Agent/Featured"
import Contact from "../../components/Agent/Contact"
import Agency from "../../components/Agent/Agency"
import { Helmet } from "react-helmet"
import Footer from "../../components/Agent/Footer"

const Agent = () => {
    return (
        <div>
            <Helmet>
                <title>Capital Agency</title>
                <meta name="description"
                    content="Capital Agency is Nigeria's leading online real estate platform which eases the stress of finding properties online" />
            </Helmet>
            <Header />
            <Featured />
            <Agency />
            <Members />
            <Explore />
            <Contact />
            <Footer />
        </div>
    )
}

export default Agent