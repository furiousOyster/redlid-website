$(document).ready(function() {
    var the_terms = $("#the-terms");

    the_terms.click(function() {
        if ($(this).is(":checked")) {
            $("#submitBtn").removeAttr("disabled");
        } else {
            $("#submitBtn").attr("disabled", "disabled");
        }
    });
}); 

$('select[id=pickupcycle]').change(function () {
    if ($(this).val() == 'eightweekly') {
        $('#eightweekly').show();
    } 
	else {
        $('#eightweekly').hide();
    }
	
});

$('select[name=wastetype]').change(function () {
    if ($(this).val() == 'gen') {
        $('#gen').show();
    } 
	else {
        $('#gen').hide();
    }
	
	if ($(this).val() == 'green') {
        $('#green').show();
    } 
	else {
        $('#green').hide();
    }
	
	if ($(this).val() == 'hard') {
        $('#hard').show();
    } 
	else {
        $('#hard').hide();
    }
});

$('select[name=payment]').change(function () {
    if ($(this).val() == 'cc') {
        $('#cc').show();
    } 
	else {
        $('#cc').hide();
    }
	
});