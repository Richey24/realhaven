import "./Profile.css"

const Profile = () => {
    return (
        <div className="profileDiv">
            <h4>Profile</h4>
            <p>Manage details of your business profile.</p>
            <form>
                <label htmlFor="businessName">Business name</label>
                <input placeholder="Rejoice Real Estate Firm" type="text" name="businessName" id="businessName" />
                <p>Your business URL: <a href="https://www.haven.com/rejoice">https://www.haven.com/rejoice</a></p>
                <div className="formDiv">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>
                </div>
                <div className="formDiv">
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile