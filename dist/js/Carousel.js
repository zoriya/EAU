"use strict";
var selectedIndex = 0;
var carousel;
var angle = 0;
function setup() {
    carousel = document.querySelector(".carousel");
    var list = document.getElementsByClassName("carousel__cell");
    for (var i = 0; i < list.length; i++) {
        list[i].id = i.toString();
        list[i].addEventListener("click", () => {
            var ev = event.target;
            rotateCarousel(ev.id);
        });
    }
    ;
}
function rotateCarousel(target) {
    angle = (selectedIndex - target) * 20 + angle;
    carousel.style.transform = "translateZ(-880px) rotateY(" + angle + "deg)";
    selectedIndex = target;
}