let count = 0
    , saveEl = document.getElementById("save-el")
    , countEl = document.getElementById("count-el")
    , deleteeEl = document.getElementById("delete-btn")
    ;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
}

function deletes() {
    let countStr = " "
    deleteeEl.textContent += countStr
    saveEl.textContent = " "
}

