$(document).ready(function() {
    // paralax efect
    $.stellar({
        responsive: true, 
        horizontalOffset: 60   
    });
    
    // popup image 
    $('.popup').magnificPopup({type:'image'});
    $('.popup_c').magnificPopup();
  //karusel
    $(".owl-carousel").owlCarousel({
        //loop: true, //prokrytka ewe raz
        responsive:{
            0:{
                items:1,
                nav:true
            }
        },
        navText: ""
    });
    // resize header
    function wResize() {
        $("header").css("min-height", $(window).height());  
    };
    wResize();
    $(window).resize(function(){
        wResize();  
    });
    
    
    //First header tabs
    $(".top_phone .tab_item").not(":first").hide();
    $(".top_phone .wrapper .tab").click(function() {
        $(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    //Second header tabs
    $(".tabs_header .tab_item").not(":first").hide();
    $(".tabs_header .wrapper .tab").click(function() {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    //third
    $(".s_contacts .tab_item").not(":first").hide();
    $(".s_contacts .tab").click(function() {    $(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    
    //fourth    
    $(".bottom_phone .tab_item").not(":first").hide();
    $(".bottom_phone .wrapper .tab").click(function() {
        $(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
                var magnificPopup = $.magnificPopup.instance; 
                magnificPopup.close();
                ths.trigger("reset");
			}, 1000);
		});
	});
	
});

$(window).load(function() {
    $(".top_header").animated("fadeInLeft");
    $(".tabs_header .wrapper").animated("flipInY");
    $(".profi_item").animated("fadeInRight");
    $(".s_profi form").animated("zoomInRight");
    $(".s_back h3").animated("fadeInUp");
    $("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp");
});