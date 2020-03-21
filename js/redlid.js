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
	
});function showzone() {	    if (document.getElementById('zone1selector').checked) {        document.getElementById('zone1').style.display = 'block';    }    else document.getElementById('zone1').style.display = 'none';		    if (document.getElementById('zone2selector').checked) {        document.getElementById('zone2').style.display = 'block';    }    else document.getElementById('zone2').style.display = 'none';		    if (document.getElementById('zone3selector').checked) {        document.getElementById('zone3').style.display = 'block';    }    else document.getElementById('zone3').style.display = 'none';}const express = require('express')const app = express()const port = process.env.PORT || 8080const parse = require('url-parse')const mailer = require('nodemailer')const bodyParser = require('body-parser')const transporter = mailer.createTransport({    host: process.env.EMAIL_SERVER,    secure: true,    port: 465,    auth: {        user: process.env.EMAIL_USER,        pass: process.env.EMAIL_PASS    }})const mailOptions = body => ({    from: process.env.EMAIL_SENDER,    to: process.env.EMAIL_RECIPIENT,    bcc: 'tom@helixapps.ca',    subject: 'TEST Contact from your website',    text: `${jsonToText(body)}`})const jsonToText = json => {    let order = json    if (json && json.ordertype) {        switch (json.ordertype) {            case 'skip':                order = generateSkipOrder(json)        }    }    let text = ''    Object.keys(order).forEach(key => {        text += `${key}: ${order[key] || '(not provided)'}\n`    })    return text}const generateSkipOrder = json => {    let order = json    const types = {        general: 'Skip size general',        green: 'Skip size green',        hard: 'Skip size hard'    }    switch (json['wastetype']) {        case 'general':            delete order[types.green]            delete order[types.hard]            break        case 'green':            delete order[types.general]            delete order[types.hard]            break        case 'hard':            delete order[types.green]            delete order[types.general]            break        default:            console.log('ERROR no wastetype detected: ', json)    }    return order}app.use(bodyParser.json())app.use(bodyParser.urlencoded({ extended: true }))app.post('/submitOrder', function (req, res) {    const referrer = req.headers['referer']    const url = parse(referrer)    // send an email if everything checks out    console.log('submitOrder: ', req.body)    const mail = mailOptions(req.body)    console.log('sending mail: ', mail)    transporter.sendMail(mail, function (error, info) {        if (error) {            console.log(error)            res.redirect(url.origin + '/email-order-failure.html')        } else {            console.log('Email sent: ' + info.response)            res.redirect(url.origin + '/email-order-confirmation.html')        }    })})app.listen(port)console.log('Server started on port:' + port)