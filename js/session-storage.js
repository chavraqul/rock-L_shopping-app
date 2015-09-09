//Save data to a temp sessionStorage

$(document).ready(function() {

	console.log("Hi you are in session-storage.js");

	$('#cool-button').click(function(){

		var checkBoxChocolate = $('#candy-chocolate').is(":checked");
		var checkBoxLollipops = $('#candy-lollipops').is(":checked");
		var checkBoxToffee = $('#candy-toffee').is(":checked");
		var checkBoxLaffyTaffy = $('#candy-laffy-taffy').is(":checked");

  		sessionStorage.setItem("candy-chocolate", checkBoxChocolate);
		sessionStorage.setItem("qty-chocolate", document.getElementById("qty-chocolate").value);
		sessionStorage.setItem("candy-lollipops", checkBoxLollipops);
		sessionStorage.setItem("qty-lollipops", document.getElementById("qty-lollipops").value);
		sessionStorage.setItem("candy-toffee", checkBoxToffee);
		sessionStorage.setItem("qty-toffee", document.getElementById("qty-toffee").value);
		sessionStorage.setItem("candy-laffy-taffy", checkBoxLaffyTaffy);
		sessionStorage.setItem("qty-laffy-taffy", document.getElementById("qty-laffy-taffy").value);

		
	});

});