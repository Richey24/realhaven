// search location on homepage location dropdown
const filterLocations = (e) => {
    const val = document.getElementById("locationList").children
    const arr = Array.from(val).filter((list) => list.className.includes(e.target.value.toLowerCase()))
    if (arr[0]) {
        const offSet = arr[0].offsetTop
        document.getElementById("locationList").scrollTop = offSet - 100
    }
}

// clear the selected search filter
const clearChecked = (val) => {
    const checkedInput = document.querySelectorAll(`#${val} input[type="checkbox"]:checked`)
    Array.from(checkedInput).forEach((inp) => {
        inp.checked = false
    })
}

// toggle dropdown
const showDropDown = (val) => {
    document.getElementById(val).classList.toggle("show")
}

// handle the slider on the price range
const handleSlide = (event, newValue, activeThumb, setValue2) => {
    const minDistance = 10;
    if (!Array.isArray(newValue)) {
        return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue2([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue2([clamped - minDistance, clamped]);
        }
    } else {
        setValue2(newValue);
    }
};

// slider text
const valueText = (value) => {
    return `${value}% `;
}

const mouseEnter = (val1, val2) => {
    document.getElementById(val1).style.display = "flex"
    document.getElementById(val2).style.display = "none"
}

const mouseLeave = (val1, val2) => {
    document.getElementById(val1).style.display = "none"
    document.getElementById(val2).style.display = "block"
}


export {
    filterLocations,
    clearChecked,
    showDropDown,
    handleSlide,
    valueText,
    mouseEnter,
    mouseLeave
}