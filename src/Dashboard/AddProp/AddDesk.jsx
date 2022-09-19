import "../DeskDash/DeskDashMain.css"
import Header from "../DeskDash/Header";
import Sidebar from '../DeskDash/Sidebar';
import MainDesk from "./MainDesk";
import { useState } from 'react';
import "./AddDesk.css"

const AddDesk = () => {
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
                <div className="hiddenHead">
                    <Header handleTopShow={handleTopShow} />
                </div>
                <Sidebar handleTopClose={handleTopClose} />
                <MainDesk showTop={showTop} handleTopClose={handleTopClose} />
            </div>
        </div>
    )
}

export default AddDesk