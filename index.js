block.addEventListener("click", wave1);
var x = 0, y = 0;
function wave1(e) {
    let nextWave, blockTop, blockLeft;
    blockTop = block.offsetTop;
    blockLeft = block.offsetLeft;
    x = e.pageX - blockTop;
    y = e.pageY - blockLeft;

    nextWave = document.createElement('div');
    nextWave.className = "wave";
    block.prepend(nextWave);
    nextWave.style.top = y + "px";
    nextWave.style.left = x + "px";
    setTimeout(() => nextWave.remove(), 3000);
};
// ---------------------------------------------------
var t = "Kostya - Bilyavskiy";
var typ = t.split("");
var fer = typ.join("").toUpperCase();

for (i = 0; i < typ.length; i++) {

    var fantom = document.createElement("h2");
    fantom.className = "text";
    fantom.innerHTML = fer[i];
    wrapperText.prepend(fantom);
    fantom.style.transform = "rotate(" + i * 18 + "deg)";
}



