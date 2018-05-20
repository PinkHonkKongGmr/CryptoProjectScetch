$(document).ready(function() {

    (function ($) {


        $('.per').click(function (g) {



         if ($('#dch').hasClass('hide')) {
    $('.hide').attr('class','datechaker');
  } else {
    $('.datechaker').attr('class','hide');
  }


            g.preventDefault();
        }

      );
    })(jQuery);

});
