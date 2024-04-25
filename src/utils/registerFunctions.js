const switchPass = () => {
    const pass = document.getElementById("password")
    pass.type === "password" ? pass.type = "text" : pass.type = "password"
}

const validateEmail = (email) => {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

export {
    switchPass,
    validateEmail
}