import "./Permission.css"
import dp from "../../img/dp.png"

const Permission = () => {
    return (
        <div className="permission">
            <div className="permDiv">
                <h4>
                    Permissions
                    <p>Manage your team’s roles and permissions</p>
                </h4>
                <button>Create custome role <span>+</span></button>
            </div>
            <div className="permList">
                <p>Owner</p>
                <div>
                    <img src={dp} alt="" />
                    <p>See permissions</p>
                </div>
            </div>
            <div className="permList">
                <p>Customer support</p>
                <div>
                    <div>
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <p>+3</p>
                    </div>
                    <p>See permissions</p>
                </div>
            </div>
            <div className="permList">
                <p>Agent</p>
                <div>
                    <div>
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <p>+3</p>
                    </div>
                    <p>See permissions</p>
                </div>
            </div>
            <div className="permList">
                <p>Admininstrator</p>
                <div>
                    <div>
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <img src={dp} alt="" />
                        <p>+3</p>
                    </div>
                    <p>See permissions</p>
                </div>
            </div>
        </div>
    )
}

export default Permission