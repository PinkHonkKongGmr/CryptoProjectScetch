$(document).ready(function() {

    (function ($) {


        $('#daycheck2').click(function (g) {


          if($('#wchr2').hasClass('wrap'))
          {$('#wchr2').removeClass('wrap');
        $('#wchr2').addClass('hidecheck');}

       if($('#mchr2').hasClass('wrap'))
        {$('#mchr2').removeClass('wrap');
      $('#mchr2').addClass('hidecheck');}

    $('#dchr2').removeClass('hidecheck');
    $('#dchr2').addClass('wrap');
    $('#daycheck2').addClass('dateactive');

    if($('#weekcheck2').hasClass('dateactive'))
    {$('#weekcheck2').removeClass('dateactive');}

    if($('#mounthcheck2').hasClass('dateactive'))
    {$('#mounthcheck2').removeClass('dateactive');}




            g.preventDefault();
        }



      );
    })(jQuery);

});
