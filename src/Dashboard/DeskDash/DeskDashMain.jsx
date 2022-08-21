import "./DeskDashMain.css"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"
import { useState } from 'react';

const DeskDashMain = () => {
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
        </div>
    )
}

export default DeskDashMain