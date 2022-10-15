import "../DeskDash/DeskDashMain.css"
import "./ListDesk.css"
import Sidebar from './../DeskDash/Sidebar';
import Main from "./Main";
import Header from "../DeskDash/Header";
import { useState } from "react"

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