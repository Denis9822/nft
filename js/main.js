$(window).on('load', function() {

    window.setTimeout(function() {
        $('.loading').hide();
    }, 2000);
})

$('.menu').click(function() {
    $(this).toggleClass('active');
    $('.hduyqf').toggleClass('active');
})



$(".img").hover(function() {
    $(this).children('.mask').css("opacity", '1');
}, function() {
    $(this).children('.mask').css("opacity", '0');
});



if ($(window).width() > 768) {
    var h = $(window).width() / 1.587;
    var mt = $(window).width() / 4.2;
} else {
    if ($(window).width() < 430) {
        var mt = $(window).width() / 1.01;
    } else {
        var mt = $(window).width() / 1.8;
    }
    var h = $(window).width() * 1.40;
}

$('.gvdYFP').attr('style', 'height: ' + h + 'px !important');
$('.box').attr('style', 'height: ' + h + 'px !important');
$('#cas').attr('style', 'height: ' + h + 'px !important');
$('.btns').attr('style', 'margin-top: ' + mt + 'px !important');

window.onresize = start;

function start() {
    if ($(window).width() > 768) {
        var h = $(window).width() / 1.587;
        var mt = $(window).width() / 4.2;
    } else {
        if ($(window).width() < 430) {
            var mt = $(window).width() / 1.01;
        } else {
            var mt = $(window).width() / 1.8;
        }
        var h = $(window).width() * 1.40;
    }

    $('.gvdYFP').attr('style', 'height: ' + h + 'px !important');
    $('.box').attr('style', 'height: ' + h + 'px !important');
    $('#cas').attr('style', 'height: ' + h + 'px !important');
    $('.btns').attr('style', 'margin-top: ' + mt + 'px !important');
};

$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters

        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 60
            },
        },

        slidesPerView: 4,
        spaceBetween: 80,
    });

    const swiper2 = new Swiper('.swiper_mob', {
        // Optional parameters

        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.arr-right',
            prevEl: '.arr-left',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        slidesPerView: 2,
        spaceBetween: 20,
    });
    const swiper3 = new Swiper('.swiper_mob2', {
        // Optional parameters

        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.arr-right2',
            prevEl: '.arr-left2',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        slidesPerView: 2,
        spaceBetween: 20,
    });

})


function anim_number() {
    $('.get-value').each(function(index) {
        let n = $(this).text().replace(/,/g, '');
        let el2 = $(this);
        $({ numberValue: 0 }).animate({ numberValue: n }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                el2.text(Math.round(val).toLocaleString('en-US'));
            }
        });
    })
}
var el = $('.YpXIF');
let anim = true;
$(window).scroll(function() {
    if ($(this).scrollTop() > el.offset().top - 1000 && anim == true) {
        anim = false;
        anim_number();
    }
});