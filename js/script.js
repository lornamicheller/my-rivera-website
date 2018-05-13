/*global $*/

$(document).ready(function () {
  var arrow = $('.arrow-up1');
  var form = $('.sign-in-form');
  var status = false;
  $('#signin').click(function (event) {
    event.preventDefault();
    if (status == false){
        arrow.fadeIn();
        form.fadeIn();
        status = true;
      }else{
        arrow.fadeOut();
        form.fadeOut();
        status = false;
      }
  })
})