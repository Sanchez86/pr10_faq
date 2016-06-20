$(document).ready(function () {
/*плавные переходы по якорям*/
$(".nexBlock").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - 147;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').stop().animate({ scrollTop: top }, 1000);
});
/*конец плавные переходы по якорям*/
});


/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
(window.innerWidth < 400) ? $('.openAccount h2').html('<h2>Open account for <span>free</span> and start trading<br>now!</h2>') : $('.openAccount h2').html('<h2>Open account for <span>free</span><br>and start trading now!</h2>');

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });

    var top_show2 = 700;
    $(window).scroll(function () {
        if (window.innerWidth>1200){
            if ($(this).scrollTop() > top_show2) {
                $('.subArrow1').css('width', '788px');
                $('.subArrow2').css('width', '828px');
                $('.subArrow3').css('width', '892px');
                $('.subArrow4').css('width', '945px');
                $('.subArrow5').css('width', '1003px');
            }
        } else {
            
            if (window.innerWidth < 1101 & $(this).scrollTop() > 600) {
                //console.log($(window).scrollTop());
                $('.subArrow1').css('width', '257px');
                $('.subArrow2').css('width', '279px');
                $('.subArrow3').css('width', '312px');
                $('.subArrow4').css('width', '342px');
                $('.subArrow5').css('width', '372px');
            }else{
                if ($(this).scrollTop() > top_show2) {

                    $('.subArrow1').css('width', '388px');
                    $('.subArrow2').css('width', '428px');
                    $('.subArrow3').css('width', '492px');
                    $('.subArrow4').css('width', '545px');
                    $('.subArrow5').css('width', '603px');
                }
            }
        }
    });
  
   
    $('.subArrow1, .subicon1 .subIcon, .icon1').on('mouseenter', function () {
        $('.icon1').addClass('icon1Active');
    });
    $('.subArrow1, .subicon1 .subIcon, .icon1').on('mouseleave', function () {
        $('.icon1').removeClass('icon1Active');
    });
    //-------------------
    $('.subArrow2, .subicon2 .subIcon, .icon2').on('mouseenter', function () {
        $('.icon2').addClass('icon2Active');
    });
    $('.subArrow2, .subicon2 .subIcon, .icon2').on('mouseleave', function () {
        $('.icon2').removeClass('icon2Active');
    });
 
    //--------------------
    $('.subArrow3, .subicon3 .subIcon, .icon3').on('mouseenter', function () {
        $('.icon3').addClass('icon3Active');
    });
    $('.subArrow3, .subicon3 .subIcon, .icon3').on('mouseleave', function () {
        $('.icon3').removeClass('icon3Active');
    });
    //------------------
    $('.subArrow4, .subicon4 .subIcon, .icon4').on('mouseenter', function () {
        $('.icon4').addClass('icon4Active');
    });
    $('.subArrow4, .subicon4 .subIcon, .icon4').on('mouseleave', function () {
        $('.icon4').removeClass('icon4Active');
    });
    //-------------------
    $('.subArrow5, .subicon5 .subIcon, .icon5').on('mouseenter', function () {
        $('.icon5').addClass('icon5Active');
    });
    $('.subArrow5, .subicon5 .subIcon, .icon5').on('mouseleave', function () {
        $('.icon5').removeClass('icon5Active');
    });

    //step1
    $('.step1 p, .step1, .step1>.stepAnimation, .step1Img').on('mouseenter', function () {
        /*mobile*/
        $('.step1Mob p').css('color', '#2a5f85');
        $('.step1Mob').addClass('step1MobActive');
        /*end mobile*/
        $('.step1 p').css('color', '#2a5f85');
        $('.step1Img').addClass('step1ImgActive');
        $('.step1').addClass('step1Active');
        if (window.innerWidth > 992) {
            $('.yen').css('top', '-37px');
            $('.euro').css('left', '129px');
        } else {
            $('.yen').css('top', '-20px');
            $('.euro').css('left', '107px');
        }

    });
    $('.step1 p, .step1, .step1>.stepAnimation, .step1Img').on('mouseleave', function () {
        /*mobile*/
        $('.step1Mob').removeClass('step1MobActive');
        $('.step1 p').css('color', '#181818!important');
        /*end mobile*/
        $('.step1Img').removeClass('step1ImgActive');
        if (window.innerWidth > 992) {
            $('.step1Active .yen').css('top', '-20px');
            $('.step1Active .euro').css('left', '107px');
        } else {
            $('.step1Active .yen').css('top', '-11px');
            $('.step1Active .euro').css('left', '97px');
        }

    });

    //step2
    $('.step2 p, .step2, .step2>.stepAnimation, .step2Img').on('mouseenter', function () {
        /*mobile*/
        $('.step2 p').css('color', '#2da75c');
        $('.step2Mob').addClass('step2MobActive');
        /*end mobile*/
        $('.step2Mob p').css('color', '#2da75c');
        $('.step2Img').addClass('step2ImgActive');
        $('.clock').css({ 'transform': 'rotateZ(180deg)' });
        $('.clock').addClass('clockActive');
    });
    $('.step2 p, .step2, .step2>.stepAnimation, .step2Img').on('mouseleave', function () {
        /*mobile*/
        $('.step2Mob').removeClass('step2MobActive');
        $('.step2 p').css('color', '#181818');
        /*end mobile*/
        $('.clock').css('transform', 'rotateZ(0deg)');
        $('.step2Img').removeClass('step2ImgActive');
    });


    //step3
    $('.step3 p, .step3, .step3>.stepAnimation, .step3Img').on('mouseenter', function () {
        $('.step3 p').css('color', '#f5842a');
        /*mobile*/
        $('.step3Mob p').css('color', '#f5842a');
        $('.step3Mob').addClass('step3MobActive');
        /*end mobile*/
        $('.step3Img').addClass('step3ImgActive');
        setTimeout("$('.baks').css('transform', 'rotateY(360deg)')", 200);
        if (window.innerWidth>992){
            $('.hend').css('top', '122px');
        } else {
            $('.hend').css('top', '112px');
        }
        $('.step3').addClass('step3Active');
    });
    $('.step3 p, .step3, .step3>.stepAnimation, .step3Img').on('mouseleave', function () {
        /*mobile*/
        $('.step3Mob').removeClass('step3MobActive');
        $('.step3 p').css('color', '#181818');
        /*end mobile*/
        setTimeout("$('.baks').css('transform', 'rotateY(0deg)')", 200);
        if (window.innerWidth > 992) {
            $('.hend').css('top', '135px');
        } else {
            $('.hend').css('top', '120px');
        }
        $('.step3Img').removeClass('step3ImgActive');
    });


    //step4
    $('.step4 p, .step4, .step4>.stepAnimation, .step4Img').on('mouseenter', function () {
        /*mobile*/
        $('.step4 p').css('color', '#2da75c');
        $('.step4Mob').addClass('step4MobActive');
        /*end mobile*/
        $('.step4Mob p').css('color', '#2da75c');
        $('.step4Img').addClass('step4ImgActive');
        $('.step4').addClass('step4Active');
       
        if (window.innerWidth > 992) {
            $('.arrowRight').css({ 'top': '53px', 'left': '73px' });
            $('.arrowLeft').css({ 'top': '91px', 'left': '56px' });
        } else {
            $('.arrowRight').css({ 'top': '56px', 'left': '60px' });
            $('.arrowLeft').css({ 'top': '86px', 'left': '52px' });
        }
    });
    $('.step4 p, .step4, .step4>.stepAnimation, .step4Img').on('mouseleave', function () {
        /*mobile*/
        $('.step4Mob').removeClass('step4MobActive');
        $('.step4 p').css('color', '#181818');
        /*end mobile*/
       
        if (window.innerWidth > 992) {
            $('.arrowRight').css({ 'top': '66px', 'left': '79px' });
            $('.arrowLeft').css({ 'top': '78px', 'left': '50px' });
        } else {
            $('.arrowRight').css({ 'top': '66px', 'left': '64px' });
            $('.arrowLeft').css({ 'top': '78px', 'left': '50px' });
        }
        $('.step4Img').removeClass('step4ImgActive');
    });


    //step5
    $('.step5 p, .step5, .step5>.stepAnimation, .step5Img').on('mouseenter', function () {
        /*mobile*/
        $('.step5 p').css('color', '#2a5f85');
        $('.step5Mob').addClass('step5MobActive');
        /*end mobile*/
        $('.step5Mob p').css('color', '#2a5f85');
        $('.step5Img').addClass('step5ImgActive');
        $('.step5').addClass('step5Active');
        if (window.innerWidth > 992) {
            $('.pigBaks').css({ 'top': '-3px', 'left': '1px' });
        } else {
            $('.pigBaks').css({ 'top': '11px', 'left': '5px' });
        }
    });
    $('.step5 p, .step5, .step5>.stepAnimation, .step5Img').on('mouseleave', function () {
        /*mobile*/
        $('.step5Mob').removeClass('step5MobActive');
        $('.step5 p').css('color', '#181818');
        /*end mobile*/
        if (window.innerWidth > 992) {
            $('.pigBaks').css({ 'top': '-10px', 'left': '-9px' });
        } else {
            $('.pigBaks').css({ 'top': '7px', 'left': '0px' });
        }
        $('.step5Img').removeClass('step5ImgActive');
    });

    if (window.innerWidth > 768) {
        var forIcon = 3200;
        $(window).scroll(function () {
            if ($(this).scrollTop() > forIcon) {
                setTimeout("$('.profIcon1 .profIconFront').css('top', '54px')", 500);
                setTimeout("$('.profIcon3 .profIconFront').css('top', '54px')", 900);
                setTimeout("$('.profIcon2 .profIconBack').css('top', '54px')", 700);
            }
        });
    }
    var stat = true;


    /*------------profIcon1---------------------------------------------------*/

    $('.profIcon1 .profIconFront').on('mouseenter', function () {
        $('.profIcon1 .profIconBack').css('top', '27px');
        $('.profIcon1 .profIconFront').css('top', '27px');
        $('.profIcon1+p').css('color', '#4b82a2');
    });
    $('.profIcon1 .profIconFront').on('mouseleave', function () {
        if (window.innerWidth > 768) {
            $('.profIcon1 .profIconBack').css('top', '0');
            $('.profIcon1 .profIconFront').css('top', '54px');
        } else {
            $('.profIcon1 .profIconBack').css('top', '13.5px');
            $('.profIcon1 .profIconFront').css('top', '41px');
        }
        $('.profIcon1+p').css('color', '#FFF');
    });

    $('.profIcon1 .profIconFront').on('mouseleave', function () {
        if (window.innerWidth > 768) {
            $('.profIcon1 .profIconBack').css('top', '0');
            $('.profIcon1 .profIconFront').css('top', '54px');
        } else {
            $('.profIcon1 .profIconBack').css('top', '13.5px');
            $('.profIcon1 .profIconFront').css('top', '41px');
        }
        $('.profIcon1+p').css('color', '#FFF');
    });

    $('.profIcon1 .profIconFront').on('click', function () {
        $('.profIcon1+p').css('color', '#4b82a2');
        if (window.innerWidth > 768) {
            if (stat == true) {
                stat = false;
                $('.profIcon1 .profIconBack').css('top', '0px');
                $('.profIcon1 .profIconFront').css('top', '0px');
            } else {
                stat = true;
                $('.profIcon1 .profIconBack').css('top', '0');
                $('.profIcon1 .profIconFront').css('top', '54px');
            }
        } else {
            if (stat == true) {
                stat = false;
                $('.profIcon1 .profIconBack').css('top', '27px');
                $('.profIcon1 .profIconFront').css('top', '27px');
            } else {
                stat = true;
                $('.profIcon1 .profIconBack').css('top', '13.5px');
                $('.profIcon1 .profIconFront').css('top', '41px');
            }
        }
    });
    /*-----------end-profIcon1---------------------------------------------------*/

    /*------------profIcon2---------------------------------------------------*/
    $('.profIcon2 .profIconFront').on('mouseenter', function () {
        $('.profIcon2 .profIconBack').css('top', '27px');
        $('.profIcon2 .profIconFront').css('top', '27px');
        $('.profIcon2+p').css('color', '#39af6f');
    });

    $('.profIcon2 .profIconFront').on('mouseleave', function () {
        if (window.innerWidth > 768) {
            $('.profIcon2 .profIconBack').css('top', '54px');
            $('.profIcon2 .profIconFront').css('top', '0');
        } else {
            $('.profIcon2 .profIconBack').css('top', '41px');
            $('.profIcon2 .profIconFront').css('top', '15px');
        }
        $('.profIcon2+p').css('color', '#FFF');
    });

    $('.profIcon2 .profIconFront').on('click', function () {
        $('.profIcon2+p').css('color', '#39af6f');
        if (window.innerWidth > 768) {
            if (stat == true) {
                stat = false;
                $('.profIcon2 .profIconBack').css('top', '27px');
                $('.profIcon2 .profIconFront').css('top', '27px');
            } else {
                stat = true;
                $('.profIcon2 .profIconBack').css('top', '54px');
                $('.profIcon2 .profIconFront').css('top', '0');
            }
        } else {
            if (stat == true) {
                stat = false;
                $('.profIcon2 .profIconBack').css('top', '27px');
                $('.profIcon2 .profIconFront').css('top', '27px');
            } else {
                stat = true;
                $('.profIcon2 .profIconBack').css('top', '41px');
                $('.profIcon2 .profIconFront').css('top', '15px');
            }
        }
    });
    /*-----------end-profIcon2---------------------------------------------------*/

    /*------------profIcon3---------------------------------------------------*/
    $('.profIcon3 .profIconFront').on('mouseenter', function () {
        
        $('.profIcon3 .profIconBack').css('top', '27px');
        $('.profIcon3 .profIconFront').css('top', '27px');
        $('.profIcon3+p').css('color', '#f79941');
    });

    $('.profIcon3 .profIconFront').on('mouseleave', function () {
        if (window.innerWidth > 768) {
            $('.profIcon3 .profIconBack').css('top', '0');
            $('.profIcon3 .profIconFront').css('top', '54px');
        } else {
            $('.profIcon3 .profIconBack').css('top', '13.5px');
            $('.profIcon3 .profIconFront').css('top', '41px');
        }
        $('.profIcon3+p').css('color', '#FFF');
    });

    $('.profIcon3 .profIconFront').on('click', function () {
        $('.profIcon3+p').css('color', '#f79941');
        if (window.innerWidth > 768) {
            if (stat == true) {
                stat = false;
                $('.profIcon3 .profIconBack').css('top', '27px');
                $('.profIcon3 .profIconFront').css('top', '27px');
            } else {
                stat = true;
                $('.profIcon3 .profIconBack').css('top', '0px');
                $('.profIcon3 .profIconFront').css('top', '54px');
            }
        } else {
            if (stat == true) {
                stat = false;
                $('.profIcon3 .profIconBack').css('top', '27px');
                $('.profIcon3 .profIconFront').css('top', '27px');
            } else {
                stat = true;
                $('.profIcon3 .profIconBack').css('top', '13.5px');
                $('.profIcon3 .profIconFront').css('top', '41px');
            }
        }
    });
    /*-----------end-profIcon3---------------------------------------------------*/

    //console.log($(window).scrollTop());

    var forArrow = 3800;
    $(window).scroll(function () {
        if ($(this).scrollTop() > forArrow) {
            if (window.innerWidth > 1500) {
                setTimeout(" $('.tutorialsArrow').css('width', '585px')", 1000);
                
            }
        };

    });

    var forArrow = 3300;
    $(window).scroll(function () {
        if ($(this).scrollTop() > forArrow) {
            if (window.innerWidth < 1500) {
                setTimeout(" $('.tutorialsArrow').css('width', '305px')", 1000);
                
            }
        };

    });

    var forArrowMin = 2900;
    $(window).scroll(function () {
        if ($(this).scrollTop() > forArrowMin) {
            if (window.innerWidth < 992) {
                setTimeout(" $('.tutorialsArrow').css('width', '305px')", 1000);
            }
            

        };

    });

    /*$(window).scroll(function () {
        console.log($(this).scrollTop());
    });*/

    forArrowMin = 2335;
    $(window).scroll(function () {
        if ($(this).scrollTop() > forArrowMin) {
            if (window.innerWidth < 768) {
                if (window.innerWidth < 400) {
                    setTimeout(" $('.tutorialsArrow').css('width', '185px')", 1000);
                }else{
                    setTimeout(" $('.tutorialsArrow').css('width', '305px')", 1000);
                }
            }

        };

    });
    $(window).stellar();

    var swapTime = 3000;
    $('#slider1').on('slide.bs.carousel', function (ev) {
        var currentSlider = $(ev.relatedTarget).attr('id').replace('s', '') - 1;
        if (currentSlider == 2) {
            $('#video')[0].play();
            setTimeout(function () {
                $('.carousel').carousel({
                    interval: swapTime
                }).carousel('pause');
            }, 0);
        }
    });
    $('#video').on('ended', function () {
        $('#slider1').carousel(0);

        setTimeout(function () {
            $('.carousel').carousel({
                interval: swapTime
            }).carousel('slide');
        }, 0);
    });
    $('.carousel').carousel({
        interval: swapTime
    });
    
        $('.tutorialAdaptiv video').on('click', function () { if (this.paused) { this.play(); } else { this.pause(); } })
        if (window.innerWidth < 1025) {
            $('.h1 .form').toggleClass('fadeIn', true);
            $('.h1 .form').toggleClass('fadeInRight', false);
        }


/*///////////////////////////////////////////
    Contact
///////////////////////////////////////////*/

$('.subFlag').on('mouseenter', function () {
    $(this).children().css('background-color', 'rgba(0, 0, 0, 0.72)');
    $(this).children().children().css('color', '#fff').children().css('color', '#e7e7e7');
 
});
    
$('.subFlag').on('mouseleave', function () {
    $(this).children().css('background-color', 'rgba(255, 255, 255, 0.82)');
    $(this).children().children().css('color', '#181818').children().css('color', '#181818');
});
/*///////////////////////////////////////////
    End Contact
    ///////////////////////////////////////////*/


/*///////////////////////////////////////////
    FAQ
///////////////////////////////////////////*/

$('.accordionHeader').on('click', function () {
    $(this).children('.faq_header').toggleClass('accordionHeaderActive');
    $(this).children('.spanPlus').toggleClass('spanMinus');
    $(this).siblings('.accordionContent').toggle('show');
    
})

/*///////////////////////////////////////////
    End FAQ
///////////////////////////////////////////*/
});









