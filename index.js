let countEl = document.getElementById("count-el")
let resultEl = document.getElementById("result-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    count = count + " - "
    resultEl.textContent += count
    countEl.textContent = 0
    count = 0
}

function reset() {
    countEl.textContent = 0;
    resultEl.textContent = "Result: "
    count = 0;
}
