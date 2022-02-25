let num = 0
    , html = `
            <h1 id="demo">0</h1>
            <button onclick="ahmed()">+</button>
            <button onclick="mody()">-</button>`;



document.write(html);


function ahmed() {
    if (num > 20) return;
    document.getElementById("demo").innerHTML = num++;
}
function mody() {
    if (num < 0) return;
    document.getElementById("demo").innerHTML = num--;
}
