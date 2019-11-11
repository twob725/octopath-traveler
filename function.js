//img change//
$(document).ready(function () {
    $('#hover1').hover(function () {
        $(this).attr({ "src": "./images/nav_01_on.png", "height": "74", "width": "106" });
    }, function () {
        $(this).attr({ "src": "./images/nav_01.png", "height": "74", "width": "106" });
    });

    $('#hover2').hover(function () {
        $(this).attr({ "src": "./images/nav_02_on.png", "height": "74", "width": "106" });
    }, function () {
        $(this).attr({ "src": "./images/nav_02.png", "height": "74", "width": "106" });
    });

    $('#hover3').hover(function () {
        $(this).attr({ "src": "./images/nav_04_on.png", "height": "74", "width": "106" });
    }, function () {
        $(this).attr({ "src": "./images/nav_04.png", "height": "74", "width": "106" });
    });
});

//hide//

$(document).ready(function () {
    $("#alfyn").hide();
    $(".selector").tabs({
        show: { effect: "fadeIn", duration: 700 }
    });
});

//tabs//
$(function () {
    $("#tabs").tabs({
    });
});

//show//

// $(document).ready(function () {
//     $("button.traveler_alfyn").click(function () {
//         $("div.traveler_alfyn").toggle("slow");

//     });
//     $("button.traveler_alfyn").click(function () {
//         $("div.tabs_traveler").toggle("slow");
//     });
// });


$(document).ready(function () {
    $("#traveler_alfyn").click(function () {
        $("div.tabs_traveler").fadeOut("slow");
        $("#alfyn").show(1200);

    });
});




////////



jQuery(document).ready(function ($) {
    $('#slider').cycle({
        fx: 'fade', speed: 2000,
        timeout: 1000,
        random: 1
    });
});