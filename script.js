document.addEventListener("DOMContentLoaded", showObj);
var el = document.getElementsByClassName("masterhead--text")[0];
var opacity = 0;

function showObj(){
    opacity += 0.01;
    el.style.opacity = opacity;

    if(opacity < 1)
        requestAnimationFrame(showObj);
}