$(document).ready(function() {

    (function ($) {


      $('#weekcheck2').click(function (h) {

        $('#wchr2').removeClass('hidecheck');
        $('#wchr2').addClass('wrap');

        $('#weekcheck2').addClass('dateactive');

        if($('#dchr2').hasClass('wrap'))
        {$('#dchr2').removeClass('wrap');
      $('#dchr2').addClass('hidecheck');}

     if($('#mchr2').hasClass('wrap'))
      {$('#mchr2').removeClass('wrap');
    $('#mchr2').addClass('hidecheck');}


    if($('#daycheck2').hasClass('dateactive'))
    {$('#daycheck2').removeClass('dateactive');}

    if($('#mounthcheck2').hasClass('dateactive'))
    {$('#mounthcheck2').removeClass('dateactive');}




            g.preventDefault();
        }



      );
    })(jQuery);

});
