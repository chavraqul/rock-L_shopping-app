$(document).ready(function() {
	
	console.log("Hi ! You are in shopping_app.js");

	var candyChocolate = sessionStorage.getItem("candy-chocolate");
	var candyLollipops  = sessionStorage.getItem("candy-lollipops");
	var candyToffee = sessionStorage.getItem("candy-toffee");
	var candyLaffyTaffy = sessionStorage.getItem("candy-laffy-taffy");

	var qtyChocolate =  sessionStorage.getItem("qty-chocolate");
	var qtyLollipops =  sessionStorage.getItem("qty-lollipops");
	var qtyToffee =  sessionStorage.getItem("qty-toffee");
	var qtyLaffyTaffy = sessionStorage.getItem("qty-laffy-taffy");

	console.log("chocolate is " + qtyChocolate + " Lollipops is " + qtyLollipops + " Toffee is " + qtyToffee + " Laffy Taffy is " + qtyLaffyTaffy);
	console.log("chocolate is " + candyChocolate + " Lollipops is " + candyLollipops + " Toffee is " + candyToffee + " Laffy Taffy is " + candyLaffyTaffy);
	
	var totalQtyChocolate = sessionStorage.getItem('totalQtyChocolate');
	var totalQtyLollipops = sessionStorage.getItem('totalQtyLollipops');
	var totalQtyToffee = sessionStorage.getItem('totalQtyToffee');
	var totalQtyLaffyTaffy = sessionStorage.getItem('totalQtyLaffyTaffy');
	
	qtyChocolate = parseInt(qtyChocolate);
	qtyLollipops = parseInt(qtyLollipops);
	qtyToffee = parseInt(qtyToffee);
	qtyLaffyTaffy = parseInt(qtyLaffyTaffy);
	
	if (candyChocolate === 'true'){
		sessionStorage.setItem("candy-chocolate", 'false');

		if(totalQtyChocolate == null || totalQtyChocolate == NaN){
			console.log("You are in chocolate second if statement");
			totalQtyChocolate = 0;
			totalQtyChocolate += qtyChocolate;
		} else{
			console.log("You are in chocolate second if Else statement");
			totalQtyChocolate = parseInt(totalQtyChocolate);
			totalQtyChocolate += qtyChocolate;
		};

		sessionStorage.setItem('totalQtyChocolate', totalQtyChocolate);
	};

	var tempQuantity = sessionStorage.getItem('totalQtyChocolate');

	tempQuantity =  parseInt(tempQuantity);

	if(tempQuantity){
		var totalChocolate = tempQuantity * 2.99;

		console.log(totalChocolate);
		//create function(arg1,arg2)
		$('.cool').append(
			"<li class=" + "'" + "chocolate-row" + "'" + ">"+
				"<ul class=" + "'" + "cool-second" + "'" + ">"+
					"<li>"+
						
						"<input type=" + "'" + "button" + "'" + "class=" + "'" + "candy-del" + "'" + "id=" + "'" + "chocolate-del" + "'"+ "value=" + "'" + "Delete" + "'" + ">"+
							
					"</li>"+
					"<li>"+
						"Chocolate"+
					"</li>"+
					"<li>" +
						totalQtyChocolate  + 
					"</li>" +
					"<li>" +
						"$2.99" +
					"</li>" +
					"<li>" +
						"$"+totalChocolate + 
					"</li>" +
				"</ul>" +
			"</li>");
  
	};
	
	if (candyLollipops === 'true'){
			
		sessionStorage.setItem("candy-lollipops", 'false');

		if(totalQtyLollipops == null || totalQtyLollipops == NaN){
			totalQtyLollipops = 0;
			totalQtyLollipops += qtyLollipops;
		} else{
			totalQtyLollipops = parseInt(totalQtyLollipops);
			totalQtyLollipops += qtyLollipops;
		};

		sessionStorage.setItem('totalQtyLollipops', totalQtyLollipops);
	};

	var tempQuantityA = sessionStorage.getItem('totalQtyLollipops');

	tempQuantityA =  parseInt(tempQuantityA);		

	if(tempQuantityA){
		var totalLollipops = tempQuantityA * 1.99;
				
		$('.cool').append(
			"<li class=" + "'" + "lollipops-row" + "'" + ">"+
				"<ul class=" + "'" + "cool-second" + "'" + ">"+
					"<li>"+
						
						"<input type=" + "'" + "button" + "'" + "class=" + "'" + "candy-del" + "'" + "id=" + "'" + "lollipops-del" + "'"+ "value=" + "'" + "Delete" + "'" + ">"+
							
					"</li>"+
					"<li>"+
						"Lollipops"+
					"</li>"+
					"<li>" +
						totalQtyLollipops  + 
					"</li>" +
					"<li>" +
						"$1.99" +
					"</li>" +
					"<li>" +
						"$"+totalLollipops + 
					"</li>" +
				"</ul>" +
			"</li>");
	};

	if (candyToffee === 'true'){
			
		sessionStorage.setItem("candy-toffee", 'false');

		if(totalQtyToffee == null || totalQtyToffee == NaN){
			totalQtyToffee = 0;
			totalQtyToffee += qtyToffee;
		} else{
			totalQtyToffee = parseInt(totalQtyToffee);
			totalQtyToffee += qtyToffee;
		};

		sessionStorage.setItem('totalQtyToffee', totalQtyToffee);

	};

	var tempQuantityB = sessionStorage.getItem('totalQtyToffee');

	tempQuantityB =  parseInt(tempQuantityB);	

	if(tempQuantityB){
		var totalToffee = tempQuantityB * 1.99;
		$('.cool').append(
			"<li class=" + "'" + "toffee-row" + "'" + ">"+
			"<ul class=" + "'" + "cool-second" + "'" + ">"+
				"<li>"+
					
					"<input type=" + "'" + "button" + "'" + "class=" + "'" + "candy-del" + "'" + "id=" + "'" + "toffee-del" + "'"+ "value=" + "'" + "Delete" + "'" + ">"+
						
				"</li>"+
				"<li>"+
					"Toffee"+
				"</li>"+
				"<li>" +
					totalQtyToffee  + 
				"</li>" +
				"<li>" +
					"$1.99" +
				"</li>" +
				"<li>" +
					"$"+totalToffee + 
				"</li>" +
			"</ul>" +
		"</li>");
	  
	};

	if (candyLaffyTaffy === 'true'){
		
		sessionStorage.setItem("candy-laffy-taffy", 'false');

		if(totalQtyLaffyTaffy == null || totalQtyLaffyTaffy== NaN){
			totalQtyLaffyTaffy = 0;
			totalQtyLaffyTaffy += qtyLaffyTaffy;
		} else{
			totalQtyLaffyTaffy = parseInt(totalQtyLaffyTaffy);
			totalQtyLaffyTaffy += qtyLaffyTaffy;
		};

		sessionStorage.setItem('totalQtyLaffyTaffy', totalQtyLaffyTaffy);	
	};

	var tempQuantityC = sessionStorage.getItem('totalQtyLaffyTaffy');

	tempQuantityC =  parseInt(tempQuantityC);		

	if(tempQuantityC){

		var totalLaffyTaffy = tempQuantityC * 0.99;

		$('.cool').append(
			"<li class=" + "'" + "laffy-row" + "'" + ">"+
				"<ul class=" + "'" + "cool-second" + "'" + ">"+
					"<li>"+
						
						"<input type=" + "'" + "button" + "'" + "class=" + "'" + "candy-del" + "'" + "id=" + "'" + "laffy-del" + "'" + "value=" + "'" + "Delete" + "'" + ">"+
							
					"</li>"+
					"<li>"+
						"Laffy Taffy"+
					"</li>"+
					"<li>" +
						totalQtyLaffyTaffy  + 
					"</li>" +
					"<li>" +
						"$0.99" +
					"</li>" +
					"<li>" +
						"$"+totalLaffyTaffy + 
					"</li>" +
				"</ul>" +
			"</li>");
	  
	};


	$("#chocolate-del").click(function(){
	
		$(".chocolate-row").remove();

		sessionStorage.setItem("qty-chocolate", 0);
		sessionStorage.setItem('totalQtyChocolate', 0);
		
	});

	$("#lollipops-del").click(function(){

		$(".lollipops-row").remove();

		sessionStorage.setItem("qty-lollipops", 0);
		sessionStorage.setItem('totalQtyLollipops', 0);
		
	});
	$("#toffee-del").click(function(){

		$(".toffee-row").remove();

		sessionStorage.setItem("qty-toffee", 0);
		sessionStorage.setItem('totalQtyToffee', 0);
		
	});
	$("#laffy-del").click(function(){

		$(".laffy-row").remove();

		sessionStorage.setItem("qty-laffy-taffy", 0);
		sessionStorage.setItem('totalQtyLaffyTaffy', 0);
		
	});

});

