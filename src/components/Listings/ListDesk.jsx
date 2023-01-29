import "../Dashboard/DashMain.css"
import "./ListDesk.css"
import Main from "./Main";
import { useState } from "react"
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";

const ListDesk = () => {

    const [showTop, setShowTop] = useState(false)

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }


    return (
        <div>
            <div className="deskDashMain">
                <Header handleTopShow={handleTopShow} />
                <Sidebar />
                <Main showTop={showTop} handleTopClose={handleTopClose} />
            </div>
            <div id="darkList" className="darkList">

            </div>
        </div>
    )
}

export default ListDesk