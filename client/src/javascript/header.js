$(window).scroll(function(){
    if ($(window).scrollTop() >= 330) {
       $('.flex-header').addClass('new-header');
    }
    else {
       $('.flex-header').removeClass('new-header');
    }
});