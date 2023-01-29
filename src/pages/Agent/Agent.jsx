import Explore from "../../components/Agent/Explore"
import Members from "../../components/Agent/Members"
import Header from "../../components/Agent/Header"
import Featured from "../../components/Agent/Featured"
import Footer from "../../components/Agent/Footer"
import Agency from "../../components/Agent/Agency"
import { Helmet } from "react-helmet"

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
            <Footer />
        </div>
    )
}

export default Agent