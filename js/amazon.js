if($('h1').html()=="Coolpad Note 3 Lite"){

$('.a-color-secondary p').html("Script is running in the background to add this phone to your cart. Please give us 5 star after ordering the phone.");


setInterval(function() {
		$('.btn')
		        .trigger('click');
		    console.log('Running Script... Please give us 5 star after ordering the phone.');
		}, 10);


}else if($('h1').html()=="Redmi Note 3"){

	$('.a-color-secondary p').html("Script is running in the background to add this phone to your cart. Please give us 5 star after ordering the phone.");


	setInterval(function(){ $("button:eq(0)").trigger('click'); console.log(' Working... '); },10);

}else if($('h1').html()=="Lenovo ZUK Z1"){

  $('.a-color-secondary p').html("Script is running in the background to add this phone to your cart. Please give us 5 star after ordering the phone.");

	setInterval(function(){ $("button:eq(0)").trigger('click'); console.log(' Working... '); },10);

}else if($('h1').html()=="Meizu m3 note"){

  $('.a-color-secondary p').html("Script is running in the background to add this phone to your cart. Please give us 5 star after ordering the phone.");

	setInterval(function(){ $("button:eq(0)").trigger('click'); console.log(' Working... '); },10);

}
