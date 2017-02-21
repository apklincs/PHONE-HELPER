
$(document).ready(function(){


$('.step-list:eq(0) .step-option:eq(0)').trigger('click');

$('.package-list .step-option').trigger('click');
$('.xm-checkbox').trigger('click');



setTimeout(function(){
  console.log($('.J_miprotectPop .modal-footer .btn-orange'));
  $('.J_miprotectPop .modal-footer .btn-orange').trigger('click');
  console.log('def');
  $('.btn-primary').trigger('click');
},2000);

// $('.J_miprotectPop .modal-footer .btn-orange').trigger('click');
// $('.btn-primary').trigger('click');

});
