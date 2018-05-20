$(document).ready(function() {

    (function ($) {


      $('#mounthcheck2').click(function (g) {

        if($('#dchr2').hasClass('wrap'))
        {$('#dchr2').removeClass('wrap');
      $('#dchr2').addClass('hidecheck');}

     if($('#wchr2').hasClass('wrap'))
      {$('#wchr2').removeClass('wrap');
    $('#wchr2').addClass('hidecheck');}

        $('#mchr2').removeClass('hidecheck');
        $('#mchr2').addClass('wrap');
        $('#mounthcheck2').addClass('dateactive');

        if($('#daycheck2').hasClass('dateactive'))
        {$('#daycheck2').removeClass('dateactive');}

        if($('#mounthcheck2').hasClass('dateactive'))
        {$('#weekcheck2').removeClass('dateactive');}





            g.preventDefault();
        }



      );
    })(jQuery);

});
