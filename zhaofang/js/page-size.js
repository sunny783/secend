//页面布局大小
function setRem() {
    var windw = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 320;
    document.documentElement.style.fontSize = (windw / uiw) * 10 + 'px'
}
setRem();
window.onresize = setRem;