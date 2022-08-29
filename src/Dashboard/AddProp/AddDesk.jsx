import "../DeskDash/DeskDashMain.css"
import Header from "../DeskDash/Header";
import Sidebar from '../DeskDash/Sidebar';
import MainDesk from "./MainDesk";
import { useState } from 'react';

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
                <Header handleTopShow={handleTopShow} />
                <Sidebar handleTopClose={handleTopClose} />
                <MainDesk showTop={showTop} handleTopClose={handleTopClose} />
            </div>
        </div>
    )
}

export default AddDesk