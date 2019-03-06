
var $ = function (id) {
    return document.getElementById(id);
};

function calculateDisc(price, discount) {
    var totalprice = price;
	{
        totalprice = price - (price * discount / 100);
    }
    totalprice = totalprice.toFixed(2);
    return totalprice;
}

function calculateDD(price,discount) {
	var discountDollar;
	{
	discountDollar = price- (price - (price * discount/100));
	}
	discountDollar = discountDollar.toFixed(2);
	return discountDollar;
}

function Result () {
    var price = parseFloat ( $("productprice").value );
    var discount = parseFloat ( $("discount%").value );
   
    
    if (isNaN(price) || isNaN(discount) ) {
        alert("Sorry, You can only enter the numeric values");
    }
    else if (0 < price && price > 1000) {  
		alert("Item price should be greater than 0 and less than 1000");
    }
	else if (0 < discount && discount > 70) {
		alert("Discount % must be greater than 0 and less than 70");
	}
	else{
		$("discdollar").value = calculateDD(price, discount);
		$("netprice").value = calculateDisc(price, discount);
	}
}
window.onload = function () {
    $("calculate").onclick = Result;
	   
};

