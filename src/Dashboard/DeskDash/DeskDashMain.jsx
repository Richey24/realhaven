import "./DeskDashMain.css"
import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"

const DeskDashMain = () => {
    return (
        <div>
            <div className="deskDashMain">
                <Header />
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default DeskDashMain