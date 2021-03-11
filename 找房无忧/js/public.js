function setRem() {
    var uiw = 320;
    winw = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = (winw / uiw) * 10 + 'px';

}
setRem();
window.onresize = setRem;