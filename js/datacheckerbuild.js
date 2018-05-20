$(document).ready(function() {

    (function ($) {


        $('#daycheck').click(function (g) {


          if($('#wchr').hasClass('wrap'))
          {$('#wchr').removeClass('wrap');
        $('#wchr').addClass('hidecheck');}

       if($('#mchr').hasClass('wrap'))
        {$('#mchr').removeClass('wrap');
      $('#mchr').addClass('hidecheck');}

    $('#dchr').removeClass('hidecheck');
    $('#dchr').addClass('wrap');
    $('#daycheck').addClass('dateactive');
    $('#per').text('день');

    if($('#weekcheck').hasClass('dateactive'))
    {$('#weekcheck').removeClass('dateactive');}

    if($('#mounthcheck').hasClass('dateactive'))
    {$('#mounthcheck').removeClass('dateactive');}




            g.preventDefault();
        }



      );
    })(jQuery);

});
