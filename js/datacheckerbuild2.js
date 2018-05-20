$(document).ready(function() {

    (function ($) {


      $('#weekcheck').click(function (h) {

        $('#wchr').removeClass('hidecheck');
        $('#wchr').addClass('wrap');

        $('#weekcheck').addClass('dateactive');
        $('#per').text("неделя");

        if($('#dchr').hasClass('wrap'))
        {$('#dchr').removeClass('wrap');
      $('#dchr').addClass('hidecheck');}

     if($('#mchr').hasClass('wrap'))
      {$('#mchr').removeClass('wrap');
    $('#mchr').addClass('hidecheck');}


    if($('#daycheck').hasClass('dateactive'))
    {$('#daycheck').removeClass('dateactive');}

    if($('#mounthcheck').hasClass('dateactive'))
    {$('#mounthcheck').removeClass('dateactive');}






            g.preventDefault();
        }



      );
    })(jQuery);

});
