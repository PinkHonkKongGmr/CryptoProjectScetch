$(document).ready(function() {

    (function ($) {


      $('#mounthcheck').click(function (g) {

        if($('#dchr').hasClass('wrap'))
        {$('#dchr').removeClass('wrap');
      $('#dchr').addClass('hidecheck');}

     if($('#wchr').hasClass('wrap'))
      {$('#wchr').removeClass('wrap');
    $('#wchr').addClass('hidecheck');}

        $('#mchr').removeClass('hidecheck');
        $('#mchr').addClass('wrap');
        $('#mounthcheck').addClass('dateactive');
        $('#per').text('месяц');

        if($('#daycheck').hasClass('dateactive'))
        {$('#daycheck').removeClass('dateactive');}

        if($('#mounthcheck').hasClass('dateactive'))
        {$('#weekcheck').removeClass('dateactive');}





            g.preventDefault();
        }



      );
    })(jQuery);

});
