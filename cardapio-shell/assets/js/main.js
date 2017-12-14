$( document ).ready(function() {

    $("#nav1").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav1").addClass("active");
        $(".otc").hide();
        $(".gourmet_main").show();
        startCarousel('gourmet');
    });

    $("#nav2").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav2").addClass("active");
        $(".otc").hide();
        $(".sdwch_main").show();
        startCarousel('sdwch');
    });

    $("#nav3").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav3").addClass("active");
        $(".otc").hide();
        $(".meal_main").show();
        startCarousel('meal');
    });

    $("#nav4").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav4").addClass("active");
        $(".otc").hide();
        $(".deserts_main").show();
        startCarousel('deserts');
    });

    $('.smallUp').on('change', function(){
        if(this.value == 'Cafeteria Gourmet'){
            $(".otc").hide();
            $(".gourmet_main").show();
            startCarousel('gourmet');
        };
        if(this.value == 'Sanduíches'){
            $(".otc").hide();
            $(".sdwch_main").show();
            startCarousel('sdwch');
        };
        if(this.value == 'Refeições'){
            $(".otc").hide();
            $(".meal_main").show();
            startCarousel('meal');
        };
        if(this.value == 'Sobremesas'){
            $(".otc").hide();
            $(".deserts_main").show();
            startCarousel('deserts');
        }
    });

    var quem, quant, qual = 0;
    $('.bt-prev').click(function(e){
      e.preventDefault();
      $('.bt-next').show();
      qual--
      $('.'+quem+' .act').removeClass('act');
      $('.'+quem+' .blt-nav li:eq('+qual+')').addClass('act');
      $('.'+quem+' article.img_txt:eq('+qual+')').addClass('act');
      if(qual == 0){
        $(this).hide();
      }
    });
    $('.bt-next').click(function(e){
      e.preventDefault();
      $('.bt-prev').show();
      qual++;
      $('.'+quem+' .act').removeClass('act');
      $('.'+quem+' .blt-nav li:eq('+qual+')').addClass('act');
      $('.'+quem+' article.img_txt:eq('+qual+')').addClass('act');
      if(qual == (quant-1)){
        $(this).hide();
      }
    });
    function startCarousel(who){
      quant = $("."+who+" article").length;
      quem = who;
      qual = 0;
      $('.blt-nav li').remove();
      $('.bt-prev').hide();
      for(var i = 0; i<quant; i++){
        $('.'+quem+' .blt-nav').append('<li><a href="javascript:;" class="blt-car">'+i+'</a></li>');
      }
      $('.'+quem+' .blt-nav li').first().addClass('act');

      $('.blt-car').click(function(e){
        e.preventDefault();
        qual = $(this).html();
        $('.'+quem+' .act').removeClass('act');
        $('.'+quem+' .blt-nav li:eq('+qual+')').addClass('act');
        $('.'+quem+' article.img_txt:eq('+qual+')').addClass('act');

        $('.bt-next').show();
        $('.bt-prev').show();
        if(qual == 0){
          $('.bt-prev').hide();
        }else if(qual == (quant-1)){
          $('.bt-next').hide();
        }
      });
    }
    startCarousel('gourmet');
});
