var right;
var left;
var cards;
var cardpct;

clamp = function(num, min, max) {
    return Math.min(Math.max(num, min), max);
};

window.onload = () => {
    right = document.getElementById("right-half");
    left = document.getElementById("left-half");
    cards = document.getElementsByClassName("card");
} 

//50 - 0
//2.75
window.onwheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY / 2;
    right.dataset.position = clamp(parseFloat(right.dataset.position) + delta, 0, 50);
    right.style.left = `${right.dataset.position}%`;
    right.animate(
        {left: `${right.dataset.position}%`},
        {duration: 1400, fill: "forwards"}
    );

    left.dataset.position = clamp(parseFloat(left.dataset.position) + delta, -50, 0);
    left.style.top = `${left.dataset.position}%`;
    left.animate(
        {top: `${left.dataset.position * 2}%`},
        {duration: 1200, fill: "both"}
    );

    cardpct = parseFloat(right.dataset.position) / 50;
    
    for (const card of cards) {
        card.style.left = `${5.4 - (2.75 * cardpct)}vw`;
        card.animate(
            {left: `${card.style.left}`},
            {duration: 1400, fill: "both"}
        );
    }

    console.log(left.dataset.position);
}

// window.onscroll = (e) => {
//     e.preventDefault();
// }