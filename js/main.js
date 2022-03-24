$(window).on('load', function() {

    window.setTimeout(function() {
        $('.loading').hide(1000);
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
} else {
    var h = $(window).width() * 1.40;

}
console.log($(window).width());
$('.gvdYFP').attr('style', 'height: ' + h + 'px !important');
$('.box').attr('style', 'height: ' + h + 'px !important');
$('#cas').attr('style', 'height: ' + h + 'px !important');
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

    if ($(window).width() > 768)
        var url = 'img/canvas_back.png';
    else
        var url = 'img/canvas_mob_bg.png';

    var canvas = document.getElementById('cas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = url;


    img.onload = function() {
        canvas.width = $(window).width();
        canvas.height = h;
        if ($(window).width() > 768)
            ctx.drawImage(img, 0, 0, $(window).width(), h);
        else
            ctx.drawImage(img, 0, 0, $(window).width(), h - 30);
    };

    var isPress = false;
    var old = null;
    canvas.addEventListener('mousedown', function(e) {
        isPress = true;
        old = { x: e.offsetX, y: e.offsetY };

        setTimeout(() => {
                var alpha = 1;

                function clear() {
                    ctx.clearRect(0, 0, 100 * alpha, 100 * alpha);
                    alpha += .5;
                    canvas.globalAlpha = alpha;
                    setTimeout(clear, 1);
                }

                clear();
            },
            3000);
    });
    canvas.addEventListener('mousemove', function(e) {
        if (isPress) {
            var x = e.offsetX;
            var y = e.offsetY;
            ctx.globalCompositeOperation = 'destination-out';

            ctx.beginPath();
            ctx.arc(x, y, 50, 0, 2 * Math.PI);
            ctx.fill();

            ctx.lineWidth = 100;
            ctx.beginPath();
            ctx.moveTo(old.x, old.y);
            ctx.lineTo(x, y);
            ctx.stroke();

            old = { x: x, y: y };

        }
    });
    canvas.addEventListener('mouseup', function(e) {
        isPress = false;
    });

})