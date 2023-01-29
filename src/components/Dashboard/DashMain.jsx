import "./DashMain.css"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"
import { useState } from 'react';

const DashMain = () => {
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
                <Main showTop={showTop} handleTopClose={handleTopClose} />
            </div>
        </div>
    )
}

export default DashMain