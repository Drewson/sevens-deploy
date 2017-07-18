

$(function(){

  $('.navigation a').click(function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 120
        }, 300);
        return false;
      }
  });

    //FLICKITY PLUGIN

    $('.buttonWrap').on('click', '.subscribeInput', function(){
        $(this).val('');
    });

    $('.buttonWrap').on('click', 'button', function(){
        console.log(this);
        event.preventDefault();
        var textValue = $('.subscribeInput').val();

        //EMAIL VALIDATOR
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        if(isEmail(textValue)){
            alert('Thanks For Subscribing!');
        } else {
            alert('Please Enter a Valid Email!');
        }

    });


    //DISPLAYS NUMBER OF ITEMS IN SHOPPING CART
    var counter = 0;

    $('li').on('click', 'button', function(event){
        console.log(event);
        counter++;
        $('.cartNumber').addClass('showButton').text(counter);

    })
});