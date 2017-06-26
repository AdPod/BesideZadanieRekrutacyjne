var animationFrame;
var animationFrameSearch;
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", globalClick);
    showObj(document.getElementsByClassName("masterhead__text")[0], 0.01);
});


function showObj(obj, step){
    if (obj) {
        obj.style.opacity = window.getComputedStyle(obj, null).getPropertyValue("opacity");

        var tick = function () {
            if (+obj.style.opacity < 1) {
                obj.style.opacity = +obj.style.opacity + step;
                (requestAnimationFrame(tick))
            }
        };
        tick();
    }
}
function hideObj(obj, step){
    if (obj) {
        obj.style.opacity = window.getComputedStyle(obj, null).getPropertyValue("opacity");

        var tick = function () {
            if (+obj.style.opacity > 0) {
                obj.style.opacity = +obj.style.opacity - step;
                requestAnimationFrame(tick);
            }
        };
        tick();
    }
}

function globalClick(event) {
    //console.log(event.target.id);
    switch (event.target.id) {
        case "search":
        case "search__input":
            hideMenu();
            showSearch();
            break;
        case "menu":
            hideSearch();
            if(document.getElementById("navbar__menu__content").style.height > 4)
                hideMenu();
            else
                showMenu();
            break;
        case "navbar__menu__content":
            break;
        default:
            hideMenu();
            hideSearch();
    }
}
function hideMenu() {
    cancelAnimationFrame(animationFrame);
    var obj = document.getElementById("navbar__menu__content");
    hideObj(obj, 0.10);
    obj.style.height = parseInt(window.getComputedStyle(obj, null).getPropertyValue("height"));

    var tick = function () {
        if (parseInt(obj.style.height) > 0) {
            var h = (parseInt(obj.style.height) - 15) > 0 ?(parseInt(obj.style.height) - 15) : 0;
            obj.style.height = h + "px";
            animationFrame = requestAnimationFrame(tick);
        }
        else
            obj.style.zIndex = 100;
    };
    tick();
}
function showMenu() {
    cancelAnimationFrame(animationFrame);
    var obj = document.getElementById("navbar__menu__content");
    showObj(obj, 0.05);
    obj.style.height = parseInt(window.getComputedStyle(obj, null).getPropertyValue("height"));

    var tick = function () {
        if (parseInt(obj.style.height) < 167) {
            obj.style.height = (parseInt(obj.style.height) + 4) + "px";
            animationFrame = requestAnimationFrame(tick);
        }
        else
            obj.style.zIndex = 100;
    };

    tick();
}

function showSearch() {
    if (document.getElementById("navbar__search").classList.contains("search--active")) return;
    var search = document.getElementById("search__input");
    document.getElementById("navbar__search").classList.add("search--active");

    cancelAnimationFrame(animationFrameSearch);
    showObj(search, 0.05);
    search.style.width = "0px";

    var tick = function () {
        if (parseInt(search.style.width) < 204) {
            search.style.width = (parseInt(search.style.width) + 8) + "px";
            animationFrameSearch = requestAnimationFrame(tick);
        }
        else{
            search.style.zIndex = 99;
        }
    };

    tick();
}

function hideSearch() {
    if (!document.getElementById("navbar__search").classList.contains("search--active")) return;

    var search = document.getElementById("search__input");
    cancelAnimationFrame(animationFrameSearch);

    hideObj(search, 0.05);
    search.style.width = parseInt(window.getComputedStyle(search, null).getPropertyValue("width"));

    var tick = function () {
        if (parseInt(search.style.height) > 0) {
            var h = (parseInt(search.style.height) - 8) > 0 ?(parseInt(search.style.height) - 8) : 0;
            search.style.height = h + "px";
            animationFrameSearch = requestAnimationFrame(tick);
        }
        else{
            search.style.zIndex = 0;
            document.getElementById("navbar__search").classList.remove("search--active");
        }
    };

    tick();
}