import Fifth from "./Fifth"
import Fourth from "./Fourth"
import Header from "./Header"
import Second from "./Second"
import Sixth from "./Sixth"
import Third from "./Third"
import "./Main.css"
import Footer from "./Footer"

const Main = () => {
    return (
        <div className="heroMain">
            <Header />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Footer />
        </div>
    )
}

export default Main