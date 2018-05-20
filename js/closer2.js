$(document).ready(function() {

    (function ($) {


        $('#alldown').click(function (g) {
if($('.rabbit2').is(":visible"))
{$('.rabbit2').removeClass('visb');


// $(".cell").addClass('adaptivewidthforsa');
// $(".showallcell").css("padding-right", "5px");
// $(".lastdeals").css("padding-left","5px");
// $(".lastdeals").css("padding-right","0px");

$('#xttdwn').text('показать всё');
}
else
{$('.rabbit2').addClass('visb');

// $(".cell").addClass('adaptivewidthforsc');
// $(".showallcell").css("padding-right", "5px");
// $(".lastdeals").css("padding-left","5px");
// $(".lastdeals").css("padding-right","0px");
$('#xttdwn').text('скрыть');
}




        }


      );
    })(jQuery);

});
