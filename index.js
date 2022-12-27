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




