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

$('select[name=wastetype]').change(function () {    if ($(this).val() == 'general') {        $('.gen').show();    } 	else {        $('.gen').hide();    }		if ($(this).val() == 'green') {        $('.green').show();    } 	else {        $('.green').hide();    }		if ($(this).val() == 'hard') {        $('.hard').show();    } 	else {        $('.hard').hide();    }});

$('select[name=payment]').change(function () {
    if ($(this).val() == 'cc') {
        $('#cc').show();
    } 
	else {
        $('#cc').hide();
    }
	
});function showzone() {	    if (document.getElementById('zone1selector').checked) {        document.getElementById('zone1').style.display = 'block';    }    else document.getElementById('zone1').style.display = 'none';		    if (document.getElementById('zone2selector').checked) {        document.getElementById('zone2').style.display = 'block';    }    else document.getElementById('zone2').style.display = 'none';		    if (document.getElementById('zone3selector').checked) {        document.getElementById('zone3').style.display = 'block';    }    else document.getElementById('zone3').style.display = 'none';}