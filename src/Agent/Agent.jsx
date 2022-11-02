import Fifth from "./Fifth"
import Fourth from "./Fourth"
import Header from "./Header"
import Second from "./Second"
import Sixth from "./Sixth"
import Third from "./Third"
import Footer from '../Homepage/Mobile/Footer'
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
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Footer agent={`Capital Agency`} />
        </div>
    )
}

export default Agent