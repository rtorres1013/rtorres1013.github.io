$(document).ready(function () {

    

    
    $('#clickme').click(function(){
        var newItem = $('#item').val();
        
        if (newItem == ""){
            alert("You have not added anything to your list");
        } else {
            appendItem(newItem);
            $('#item').val("");
            $('#item').focus();
        }
    })




    // Appends input value as new line item
    function appendItem(item){
         
        $('#list').append("<li>" + item + '</li>');
    }

    // Removes li when clicked
    $('ul').on("click", "li", function(){
        $(this).remove();
	})
	
	

    // 1. Attach a .click() event to #clickme; attach an anonymous function to the .click()
    // 1A. This anonymous function should create a variable, newItem equal to the value of #item
    // 1B. This anonymous function should call a separate function, appendItem, and pass it the variable newItem
    // 1C. This anonymous function should then clear the text inside of #item

    // 2. Write the appendItem function here
})