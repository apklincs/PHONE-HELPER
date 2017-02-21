if(jQuery('.btn-express-checkout').length){
	console.log("Buy now button found")
	jQuery('.btn-express-checkout')[0].click()
}else{
	console.log("Reloading the page")
	location.reload()
}
