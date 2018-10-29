function main() {
    
    (function () {
        'use strict';

        //Efeitos
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        //Menu desaparecendo
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 500;
            
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            }
            else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({ 
            target: '.navbar-default',
            offset: 80
        });
//---
        // Hide nav on click
        $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
            
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
                
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }());
}
main();