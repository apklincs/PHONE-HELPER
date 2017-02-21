
$(document).ready(function(){


$('.step-list:eq(0) .step-option:eq(0)').trigger('click');

setInterval(function(){
  if( $('.btn-primary').html() == "Buy now" ){
    $('.btn-primary').trigger('click');
  }
}, 10);


});
