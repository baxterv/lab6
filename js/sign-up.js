//signup.js 
// add your JavaScript code to this file

$(function() {
	var stateSelect = $('select[name="state"]');
	var idx;
	var state;
	var option;
	
	for (idx=0; idx < usStates.length; ++idx) {
		state = usStates[idx];
        option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
	}

	$('.cancel-signup').click(function(){
		window.location = 'http://www.google.com';
	}); //cancel-sign-up click

}); //on doc ready

	$('.signup-form').submit(function(){
	    var signupForm = $(this);
	    var reqField;       //reference to a required field
	    var reqValue;       //the required field's value

	    //find the input with name="first-name" and get its trimmed value
	    reqField = signupForm.find('input[name="first-name"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        //field has no value
	        alert('You must enter a first name!');
	        return false;
	    }
	    reqField = signupForm.find('input[name="last-name"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        //field has no value
	        alert('You must enter a last name!');
	        return false;
	    }
	    reqField = signupForm.find('input[name="email"]');
	    reqValue = reqField.val().trim();
	    if (0 == reqValue.length) {
	        //field has no value
	        alert('You must enter an email!');
	        return false;
	    }

	    var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    	if (0 < addr1Value.length) {
    		var zipInput = signupForm.find('input[name="zip"]');
    		var zipValue = zipInput.val();
    		if(0 == zipValue.length) {
    			alert("You must enter a zip code!");
    			return false;
    		}
    	}
	   
    }); //on submit


