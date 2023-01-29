const filterLocations = (e) => {
    const val = document.getElementById("locationList").children
    const arr = Array.from(val).filter((list) => list.className.includes(e.target.value.toLowerCase()))
    if (arr[0]) {
        const offSet = arr[0].offsetTop
        document.getElementById("locationList").scrollTop = offSet - 100
    }
}

const clearChecked = (val) => {
    const checkedInput = document.querySelectorAll(`#${val} input[type="checkbox"]:checked`)
    Array.from(checkedInput).forEach((inp) => {
        inp.checked = false
    })
}

const showDropDown = (val) => {
    document.getElementById(val).classList.toggle("show")
    console.log(document.getElementById(val));
}

export {
    filterLocations,
    clearChecked,
    showDropDown
}