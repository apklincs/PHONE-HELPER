window.onload = function () {
	if($('.col-6-12 button[type="submit"]').length){
		console.log("Buy now button found")
		$('.col-6-12 button[type="submit"]')[0].click()
	}else{
		console.log("Reloading the page")
		location.reload()
	}
}
