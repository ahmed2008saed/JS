let num = 0
    , h1 = `<h1 id="demo">0</h1>`
    , buttonA = `<button onclick="ahmed()">+</button>`
    , buttonM = `<button onclick="mody()">-</button>`;



document.write(h1);
document.write(buttonA);
document.write(buttonM);


function ahmed() {
    if (num > 20) return;
    document.getElementById("demo").innerHTML = num++;
}
function mody() {
    if (num < 0) return;
    document.getElementById("demo").innerHTML = num--;
}
