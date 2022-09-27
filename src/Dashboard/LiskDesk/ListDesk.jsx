import "../DeskDash/DeskDashMain.css"
import "./ListDesk.css"
import Sidebar from './../DeskDash/Sidebar';
import Main from "./Main";

const ListDesk = () => {

    return (
        <div>
            <div className="deskDashMain">
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default ListDesk