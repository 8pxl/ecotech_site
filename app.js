var right;
var left;
var cards;
var cardpct;
var arrows;

clamp = function(num, min, max) {
    return Math.min(Math.max(num, min), max);
};

function arrowHandler() {
    right.style.transition = "left 0.8s";
    left.style.transition = "top 0.8s";

    right.dataset.position = 0;
    right.style.left = "0%";

    left.dataset.position = -50;
    left.style.top = "-100%";
    
    for (const card of cards) {
        card.style.left = `${5.4 - (2.75)}vw`;
    }
    console.log(right.style.left);
}

window.onload = () => {
    right = document.getElementById("right-half");
    left = document.getElementById("left-half");
    cards = document.getElementsByClassName("card");
    arrows = document.getElementsByClassName("next-arrow");
    for (const arrow of arrows) {
        arrow.addEventListener("click", arrowHandler);
    }
} 

//50 - 0
//2.75
window.onmousemove = () => {
    // right.style.left = "50%";

    // left.style.top = "0%";
    // console.log(right.style.left);
}

window.onwheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY/3;
    right.dataset.position = clamp(parseFloat(right.dataset.position) + delta, 0, 50);
    right.style.left = `${right.dataset.position}%`;
    right.style.transition = "left cubic-bezier(0,.75,.29,1) 0.5s";
    // right.animate(
    //     {left: `${right.dataset.position}%`},
    //     {duration: 1400, fill: "forwards"}
    // );

    left.dataset.position = clamp(parseFloat(left.dataset.position) + delta, -50, 0);
    left.style.top = `${left.dataset.position * 3}%`;
    left.style.transition = "top cubic-bezier(0,.75,.29,1) 0.5s";
    // left.animate(
    //     {top: `${left.dataset.position * 2}%`},
    //     {duration: 1200, fill: "forwards"}
    // );

    cardpct = parseFloat(right.dataset.position) / 50;
    
    for (const card of cards) {
        card.style.left = `${5.4 - (2.75 * cardpct)}vw`;
        card.animate(
            {left: `${card.style.left}`},
            {duration: 1400, fill: "both"}
        );
    }
    console.log(right.style.left);
}

// window.onscroll = (e) => {
//     e.preventDefault();
// }