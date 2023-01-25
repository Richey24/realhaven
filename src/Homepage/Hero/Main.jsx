import Header from "./Header"
import "./Main.css"
import Footer from "./Footer"
import BestProperties from "./BestProperties"
import Trending from "./Trending"
import Recommend from "./Recommend"
import Testimony from "./Testimony"
import Faq from "./Faq"

const Main = () => {
    return (
        <div className="heroMain">
            <Header />
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