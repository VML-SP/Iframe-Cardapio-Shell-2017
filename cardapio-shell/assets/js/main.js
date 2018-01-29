$(document).ready(function () {

    $("#nav1").click(function () {
        $(".nout").removeClass("active");
        $("#nav1").addClass("active");
        $(".otc").hide();
        $(".gourmet_main").show();
        startCarousel('gourmet');
        var mySwiper = new Swiper('.s-gourmet', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }

            /* // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            }, */
        });
    });    

    $("#nav2").click(function () {
        $(".nout").removeClass("active");
        $("#nav2").addClass("active");
        $(".otc").hide();
        $(".sdwch_main").show();
        startCarousel('sdwch');
        var mySwiper = new Swiper('.s-sdwch', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }

            /* // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            }, */
        });
    });

    $("#nav3").click(function () {
        $(".nout").removeClass("active");
        $("#nav3").addClass("active");
        $(".otc").hide();
        $(".meal_main").show();
        startCarousel('meal');
        var mySwiper = new Swiper('.s-meal', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }

            /* // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            }, */
        });
    });

    $("#nav4").click(function () {
        $(".nout").removeClass("active");
        $("#nav4").addClass("active");
        $(".otc").hide();
        $(".deserts_main").show();
        startCarousel('deserts');
        var mySwiper = new Swiper('.s-deserts', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }

            /* // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            }, */
        });
    });

    $('.smallUp').on('change', function () {
        if (this.value == 'Cafeteria Gourmet') {
            $("#nav1").trigger("click");
        };
        if (this.value == 'Sanduíches') {
            $("#nav2").trigger("click");
        };
        if (this.value == 'Refeições') {
            $("#nav3").trigger("click");
        };
        if (this.value == 'Sobremesas') {
            $("#nav4").trigger("click");
        }
    });
    $("#nav1").trigger("click");

    var quem, quant, qual = 0;
    $('.bt-prev').click(function (e) {
        e.preventDefault();
        $('.bt-next').show();
        qual--
        $('.' + quem + '_main .act').removeClass('act');
        $('.' + quem + '_main .blt-nav li:eq(' + qual + ')').addClass('act');
        var art = $('.' + quem + ' article.img_txt:eq(' + qual + ')').addClass('act');
        var section = art.closest('section');
        section[0].scrollTo(art[0].offsetLeft, 0);
        if (qual == 0) {
            $(this).hide();
        }
    });
    $('.bt-next').click(function (e) {
        e.preventDefault();
        $('.bt-prev').show();
        qual++;
        $('.' + quem + '_main .act').removeClass('act');
        $('.' + quem + '_main .blt-nav li:eq(' + qual + ')').addClass('act');
        var art = $('.' + quem + ' article.img_txt:eq(' + qual + ')').addClass('act');
        var section = art.closest('section');
        section[0].scrollTo(art[0].offsetLeft, 0);
        if (qual == (quant - 1)) {
            $(this).hide();
        }
    });
    $('article.img_txt *').on('focus', function(e) {
        //console.log('focus', e);
        qual = $(this).closest('article.img_txt').index();
        $('.' + quem + '_main .act').removeClass('act');
        $('.' + quem + '_main .blt-nav li:eq(' + qual + ')').addClass('act');
        var art = $('.' + quem + ' article.img_txt:eq(' + qual + ')').addClass('act');
        var section = art.closest('section');
        section[0].scrollTo(art[0].offsetLeft, 0);

        $('.bt-next').show();
        $('.bt-prev').show();
        if (qual == 0) {
            $('.bt-prev').hide();
        } else if (qual == (quant - 1)) {
            $('.bt-next').hide();
        }
        e.preventDefault();
    });
    function startCarousel(who) {
        quant = $(".mainDesktop ." + who + " article").length;
        quem = who;
        qual = 0;
        $('.blt-nav li').remove();
        $('.bt-prev').hide();
        for (var i = 0; i < quant; i++) {
            $('.' + quem + '_main .blt-nav').append('<li><a tabindex="-1" href="javascript:;" class="blt-car">' + i + '</a></li>');
        }
        $('.' + quem + '_main .blt-nav li').first().addClass('act');

        $('.blt-car').click(function (e) {
            e.preventDefault();
            qual = $(this).html();
            $('.' + quem + '_main .act').removeClass('act');
            $('.' + quem + '_main .blt-nav li:eq(' + qual + ')').addClass('act');
            var art = $('.' + quem + ' article.img_txt:eq(' + qual + ')').addClass('act');
            var section = art.closest('section');
            section[0].scrollTo(art[0].offsetLeft, 0);

            $('.bt-next').show();
            $('.bt-prev').show();
            if (qual == 0) {
                $('.bt-prev').hide();
            } else if (qual == (quant - 1)) {
                $('.bt-next').hide();
            }
        });
    }
    startCarousel('gourmet');
});
