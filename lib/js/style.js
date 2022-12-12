$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    $(function() {
        $("#date").datepicker();
        $("#date1").datepicker();
        $(".hasDatepicker").flatpickr({
            dateFormat: "d/m/Y"
        });
    });


    $("section.about .thumd .image1").click(function() {
        $('section.about .thumd .image1').css("z-index", "1");
        $('section.about .thumd .image2').css("z-index", "0");
    });
    $("section.about .thumd .image2").click(function() {
        $('section.about .thumd .image1').css("z-index", "0");
        $('section.about .thumd .image2').css("z-index", "1");
    });

});