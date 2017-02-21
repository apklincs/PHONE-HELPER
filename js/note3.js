
$(document).ready(function(){


$('.step-list:eq(0) .step-option:eq(1)').trigger('click');

$('.step-list:eq(1) .step-option:eq(0)').trigger('click');


setInterval(function(){
  if( $('.btn-primary').html() == "Buy now" ){
    $('.btn-primary')[0].click();
    $('.btn-primary').removeClass('btn-primary');
  }
},10);


});
