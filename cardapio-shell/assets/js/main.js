$( document ).ready(function() {
    $("#nav1").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav1").addClass("active");
        $(".otc").hide();
        $(".gourmet_main").show();
    });

    $("#nav2").click(function(){
        $("nav").find(".nout").removeClass("active");
        $("#nav2").addClass("active");
        $(".otc").hide();
        $(".sdwch_main").show();
    });

    $("#nav3").click(function(){       
        $("nav").find(".nout").removeClass("active");
        $("#nav3").addClass("active");
        $(".otc").hide();
        $(".meal_main").show();
    });

    $("#nav4").click(function(){       
        $("nav").find(".nout").removeClass("active");
        $("#nav4").addClass("active");
        $(".otc").hide();
        $(".deserts_main").show();
    });

    $('.smallUp').on('change', function(){
        if(this.value == 'Cafeteria Gourmet'){            
            $(".otc").hide();
            $(".gourmet_main").show();
        };
        if(this.value == 'Sanduíches'){            
            $(".otc").hide();
            $(".sdwch_main").show();
        };
        if(this.value == 'Refeições'){            
            $(".otc").hide();
            $(".meal_main").show();
        };
        if(this.value == 'Sobremesas'){            
            $(".otc").hide();
            $(".deserts_main").show();
        }

    });
    
});