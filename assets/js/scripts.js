$(document).ready(function() {

    $('.slider1').slick({
        dots: true,
         responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
    ]
    });
    $('.slider2').slick({
        dots: false
    });




    $(document).on("click",".navbar-nav li a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).on("click", ".to-the-top", function() {

        $('body, html').animate({
            scrollTop: 0
        }, delay);

    });






});




    // var fixed_head_pos, fixed_head_height;
    var top_show = 350;
    var delay = 1000;
    var show = true;

 $(document).scroll(function(){

    if(!show) return false;

    // var scroll_top = $(window).scrollTop();
    // if (scroll_top >= fixed_head_pos){
    //     $('.navbar').addClass('fixed');
    //     $('body').css('padding-top', fixed_head_height + 'px');
    // } else {
    //     $('.navbar').removeClass('fixed');
    //     $('body').css('padding-top', '0');
    // }


    if ($(this).scrollTop() > top_show) {
            $('.to-the-top').fadeIn();
        } else {
            $('.to-the-top').fadeOut();
        }

});
