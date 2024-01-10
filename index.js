let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 1

function increment() {
    count +=1
    countEl.textContent = count
}

function save() {
    let countStr = count + " hour(s) of a coding course is " + (count+3) + " hours in real time 😨😢"
    saveEl.textContent = countStr 
    countEl.textContent = 1
    count = 1
}
