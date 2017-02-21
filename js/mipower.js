
$(document).ready(function(){

setInterval(function(){
  if( $('.btn-primary').html() == "Buy now" ){
    $('.btn-primary').trigger('click');
  }
}, 10);


});
