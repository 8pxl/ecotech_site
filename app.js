var right;
var left;
var cards;
var cardpct;
var arrows;

clamp = function(num, min, max) {
    return Math.min(Math.max(num, min), max);
};

function arrowHandler() {
    right.style.transition = "left 0.8s, filter 0.7s";
    left.style.transition = "top 0.8s, filter 0.7s";

    right.dataset.position = 0;
    right.style.left = "0%";

    left.dataset.position = -50;
    left.style.top = "-100%";
    
    cardpct = 0;
    for (const card of cards) {
        card.style.left = `${5.4}vw`;
    }
    console.log(right.style.left);
}

window.onload = () => {
    right = document.getElementById("right-half");
    left = document.getElementById("left-half");
    cards = document.getElementsByClassName("card");
    arrows = document.getElementsByClassName("scroll-circle");
    for (const arrow of arrows) {
        arrow.addEventListener("click", arrowHandler);
    }


    // var $card = $(".card");
    // $card.click(function resize(e) { 
    //     console.log(($(this).hasClass('enlarged')))
    //     if ($(this).hasClass('enlarged')) {
    //         $(this).css({
    //             "width": "17vw",
    //             "height": "33vh",
    //             "position": "relative",
    //             "transition": "all 0s"
    //         })
    //     }
    //     else {
    //         $(this).css({
    //             "width": "34vw",
    //             "height": "66vh",
    //             "position": "fixed",
    //             "transition": "all 0s"
    //         })
    //     }
    //     $(this).toggleClass('enlarged');
    //   });

    // $(".container").click(function () {
    //     console.log($(".container").hasClass("blur"));
    //     if($(".container").hasClass("blur")) {
    //         $(".container").removeClass("blur");
    //         $(".selected").css({
    //             "opacity": "0",
    //             "width": "0vw",
    //             "height": "0vh"
    //         });
    //         $("#exit").css({"display": "none"});
    //     }
    // });
    
    var $card = $(".card");
    $card.click(function () {
        var img = $(this).css("background-image");
        $(".selected").css({
            "background-image": img,
            "width": "34vw",
            "height": "66vh",
            "opacity": "1"
        });
        $(".description").css({
            "width": "34vw",
            "height": "66vh",
            "opacity": "1"
        })
        $(".description"). text($(this).data('text'));

        $("#left-half").addClass("blur");
        $("#right-half").addClass("blur");
        // $("").addClass("blur");
        $("#exit").css({"display": "flex"});
        
    });

    $("#exit").click(function () {
        $(".selected").css({
            "opacity": "0",
            "width": "0vw",
            "height": "0vh"
        });
        $(".description").css({
            "opacity": "0",
            "width": "0vw",
            "height": "0vh"
        })

        $("#left-half").removeClass("blur");
        $("#right-half").removeClass("blur");

        $(this).css({
            "display": "none"
        });
    });

} 

//50 - 0
//2.75
window.onmousemove = () => {
    // for (const card of cards) {
    //     if(card.classList.contains('enlarged'))
    //     {
    //         card.style.transition = ("all 0s");
    //     }
    //     else {
    //         card.style.transition = ("all 0.8s");
    //     }
    //   }
    // right.style.left = "50%";

    // left.style.top = "0%";
    // console.log(right.style.left);
}

window.onwheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY/4 - e.deltaX/4;
    right.dataset.position = clamp(parseFloat(right.dataset.position) + delta, 0, 50);
    right.style.left = `${right.dataset.position}%`;
    right.style.transition = "left cubic-bezier(0,.75,.29,1) 0.5s, filter 0.7s";
    // right.animate(
    //     {left: `${right.dataset.position}%`},
    //     {duration: 1400, fill: "forwards"}
    // );

    left.dataset.position = clamp(parseFloat(left.dataset.position) + delta, -50, 0);
    left.style.top = `${left.dataset.position * 3}%`;
    left.style.transition = "top cubic-bezier(0,.75,.29,1) 0.5s, filter 0.7s";
    // left.animate(
    //     {top: `${left.dataset.position * 2}%`},
    //     {duration: 1200, fill: "forwards"}
    // );

    cardpct = parseFloat(right.dataset.position) / 50;
    
    for (const card of cards) {
        card.style.left = `${5.4 - (2.75 * cardpct)}vw`;
        // card.animate(
        //     {left: `${card.style.left}`},
        //     {duration: 1400, fill: "both"}
        // );
    }
    console.log(right.style.left);
}

// window.onscroll = (e) => {
//     e.preventDefault();
// }