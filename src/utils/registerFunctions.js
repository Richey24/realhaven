const switchPass = (id) => {
    const pass = document.getElementById(id)
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