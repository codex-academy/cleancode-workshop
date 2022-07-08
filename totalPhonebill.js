var totalPhoneBill = function(cost){
	var list = cost.split(", ");
	var totalBill = 0;
  	for (var i=0; i<list.length; i++){
		var item = list[i];
	  if (item === "call"){
		   totalBill = totalBill + 2.75;
	   }
	   else if (item === "sms"){
			 totalBill = totalBill + 0.65;
	   }
	}
  	return "R" + totalBill.toFixed(2);
}