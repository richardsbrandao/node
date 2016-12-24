function placeAnOrder(item) {
	console.log("Customer Requests for: " + item)

	cookAndDelivery(function() { console.log(item + " was delivered") }, item)
}

function cookAndDelivery(callback, item) {
	console.log(item + " is cooking")
	setTimeout(callback, 5000)
}


placeAnOrder('Macarrão');
placeAnOrder('Pizza');
placeAnOrder('Rice and Beans');
placeAnOrder('Sandwich');
placeAnOrder('Sweets');
console.log("More orders!?")