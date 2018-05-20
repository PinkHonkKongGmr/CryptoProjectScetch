$(document).ready(function() {

    (function ($) {


        $('#allup').click(function (g) {
if($('.rabbit').is(":hidden"))

{
  $('.rabbit').addClass('visb');
$('#txtup').text('скрыть');
}

// else if ($('.rabbit').is(":hidden")&&$(".rabbit2").is(":visible"))
//
// {
//
// $(".cell").css("padding", "5px 28px");
// $(".showallcell").css("padding-right", "5px");
// $(".lastdeals").css("padding-left","5px");
// $(".lastdeals").css("padding-right","0px");
// }




else

{$('.rabbit').removeClass('visb');
$('#txtup').text('показать всё');
// $(".cell").css("padding", "5px 25px");
// $(".showallcell").css("padding-right", "5px");
// $(".lastdeals").css("padding-left","5px");
// $(".lastdeals").css("padding-right","0px");


}





        }


      );
    })(jQuery);

});
