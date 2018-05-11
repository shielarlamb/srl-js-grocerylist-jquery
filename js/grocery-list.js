console.log($);

// All the codes are going inside the jquery function so it doesn't run until the DOM is loaded in the browser

$(() => {

	//Use JQuery to select the id of the button just like in a CSS file. It reads like the CSS. If no #(id) or class(.) is added, it treats it as an html tag. 

	$("#btn-new").on("click", () => {

		//show the form and hide the button 
		$("#form-add-item").removeClass("hide");
		$("#btn-new").addClass("hide");
		$("#input-item").focus();
		/// make sure you don't have the style element from CSS. It doesn't work because the class hide is sett in the html.
		// only use toggle if you don't have CSS classes show/hide.
		/*	$("#form-add-item").toggle();
			$("#btn-new").toggle();*/

	});

	//Hide the form and show the button
	$("#btn-add-item").on("click", (event) => {

		event.preventDefault();

		let itemText = $("#input-item").val();
		addItemToGroceryList(itemText);
		$("#input-item").val("");

		$("#form-add-item").addClass("hide");
		$("#btn-new").removeClass("hide");
	});

	function addItemToGroceryList(text) {



		//create list using ES6 template literal for HTML string.
		let $listElement = $(`<li><span>${text}</span><i class="glyphicon glyphicon-remove"</i></li>`);

		$("#grocery-list").append($listElement);

		$listElement.on("click", () => {
			$listElement.remove();
			// //Substract count
			changeItemCount(-1);
		});

		changeItemCount(1);
		//change item count up

	}

	function changeItemCount(number) {
		let currentCount = parseInt($("#count").text());
		$("#count").text(currentCount + number);
	}

});
