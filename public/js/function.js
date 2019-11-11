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


///tab-2///
//tabs//  //hide// 

$(document).ready(() => {
    $("#alfyn").hide();

    $(".selector").tabs({
        show: { effect: "fadeIn", duration: 1000 }
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
    $("#traveler_alfyn").click(() => {
        $("div.tabs_traveler").fadeOut(200);
        $("#alfyn").show(800);

    });
    $("#hover3").click(() => {
        $("div.afn").hide(1);
    });
    $("#hover1").click(() => {
        $("div.afn").hide(1);
    });
    $("#btn_back").click(() => {
        $("div.afn").hide(1);
        $('#tabs-2').show(1000);
    });

});






///tab-3///
//slider//
jQuery(document).ready(function ($) {
    $('.slider').cycle({
        fx: 'fade', speed: 2000,
        timeout: 1000,
        random: 1
    });
});









///consent////
//page//

$(document).ready(() => {
    // $("#memberPF").hide();//    暫時先隱藏
    $("#consent").hide();


    // $("#submit").click(()=>{
    //     if(".consent_checkbox"===ture){
    //         $('#memberPF').show();
    //         $('#consent').hide();
    //     }        
    // })


    $("#submit").click(() => {
        var check = $("input[name='consent_checkbox']:checked").length;//判斷有多少個方框被勾選
        if (check == 0) {
            alert("請閱讀後勾選同意");
            return false;//不要提交表單
        } else {
            $('#memberPF').show();
            $('#consent').hide();
            return true;//提交表單
        }
    })
    $(".ajax").colorbox();
});




