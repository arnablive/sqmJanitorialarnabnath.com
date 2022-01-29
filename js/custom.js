jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
    jQuery(".header_area").addClass("fix");
  } else {
    jQuery(".header_area").removeClass("fix");
  }
});



 jQuery(document).ready(function() {
        jQuery(".menu li").find("ul").parent().append("<span></span>");
       jQuery(".menuButton").click(function() {
           jQuery( ".menuButton" ).toggleClass( "arrow_change" );
		 	jQuery(".menuButton + ul").slideToggle(); 
		});
	   jQuery(".menu ul li span").click(function(){
           if(jQuery("span").parent().children("ul").is(":visible")){
               jQuery(this).parent().siblings().children("ul").slideUp();
           }
            jQuery(this).parent().children("ul").slideToggle();  
    });
    });
 
 jQuery(".myAccount span").click(function() {
           jQuery( ".myAccount span" ).toggleClass( "arrow_change" );
		 	jQuery(".myAccountDropdown").slideToggle(); 
		});
		
    //popular_service_slider

    $('#popular_service_slider').owlCarousel({
        navigation : true,     
        autoplay: true,
        autoplayTimeout:3000,
        loop: true,
        margin:18,
        nav:false,
        dots:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 3,                    
            },
            992: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });

    //banner_slider

    $('#banner_slider').owlCarousel({
        navigation : true,     
        autoplay: true,
        autoplayTimeout:3000,
        loop: true,
        margin:18,
        nav:false,
        dots:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 1,                    
            },
            992: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    //counter js
    (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
    $('.Services_Complete').countTo({
        from: 0,
        to: 10600,
        speed: 5000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});
jQuery(function($) {
    $('.Happy_Clients').countTo({
        from: 0,
        to: 10400,
        speed: 5000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});
jQuery(function($) {
    $('.Dedicated_Employee').countTo({
        from: 0,
        to: 6400,
        speed: 5000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});
jQuery(function($) {
    $('.Years_Of_Experience').countTo({
        from: 0,
        to: 10,
        speed: 5000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
    });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 500) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});