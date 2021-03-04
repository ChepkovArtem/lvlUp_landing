//Relocation to order page on button click
$(document).ready(function(){
    $(".button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).children('a').attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
})
//Relocation to top after reload
$(window).on('beforeunload', function (){
    $(window).scrollTop(100);
})
// Slick slider
$('.reviews__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: document.querySelector('.arrows-next'),
    prevArrow: document.querySelector('.arrows-prev')
});

//Timer
var countDownDate = new Date(Date.parse(new Date()) + 1800000);

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".order__past").innerHTML ="До конца акции осталось: " + days + " дней " + hours + " часов "
        + minutes + " минут " + seconds + " секунд";
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".order__timer").innerHTML = "Время вышло";
    }
}, 1000);

$(".form__input").on("focus", function(){
    $(this).addClass("focus");
});

$(".form__input").on("blur", function(){
    if($(this).val()=="")
        $(this).removeClass("focus");
})

$(".tel").on('input', function(e){
    this.value = this.value.replace(/[^0-9\.]/g, '');
});