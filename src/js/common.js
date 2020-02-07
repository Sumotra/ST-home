$(document).ready(function($) {

    let htmlPage = document.documentElement;


    // close notification
    $('.notification__button_done').on('click', function() {
        $('.notification').css({'display': 'none'});
    });


    // modal
    $('#formSubmit').on('click', function(e){
        e.preventDefault();
        $('#exampleModal').arcticmodal({

            beforeOpen: function() {
                if (window.innerWidth > htmlPage.clientWidth) {
                    var scrollBarWidth = window.innerWidth - htmlPage.clientWidth;
                    $('html').css({'margin-right':scrollBarWidth + 'px'});
                } else {
                    $('html').css({'margin-right':0});
                }
            },

            afterClose: function() {
                $('html').css({'margin-right':0});
            }
          
        });
    });


    // Hover-effects
    function hoverByClick(selector, hoverClass, _time) {
        $(selector).click(function() {
            $(this).addClass(hoverClass);
            setTimeout(function () {
                $(selector).removeClass(hoverClass)
            }, _time);
        });
    }

    hoverByClick(".menu__link", "menu__link_hovered", 500);

    hoverByClick(".news__link", "news__link_hovered", 500);

    hoverByClick(".employee-card", "employee-card_hovered", 500);
  
});
