let count = 0

function increaseCount(){
    count++
    document.getElementById('countDisplay').innerText = count
    checkCountValue()
}

function checkCountValue(){
    if (count === 10) {
        alert("your instagram post reached 10 followers")
    } else if (count === 20) {
        alert("your instagram post reached 20 followers")
    }
}

function resetCount(){
    document.getElementById('countDisplay').innerText = 0
    alert("Count has reset to 0")
}