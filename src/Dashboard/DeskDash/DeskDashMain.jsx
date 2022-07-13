import "./DeskDashMain.css"
import Main from "./Main"
import Sidebar from "./Sidebar"

const DeskDashMain = () => {
    return (
        <div>
            <div className="deskDashMain">
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default DeskDashMain