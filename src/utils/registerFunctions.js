const switchPass = () => {
    const pass = document.getElementById("password")
    pass.type === "password" ? pass.type = "text" : pass.type = "password"
}

export {
    switchPass
}