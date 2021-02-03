//define username and password

var myUsername = 'some.one.00'; //change to YOUR user

var myPassword = 'password'; //change to YOUR password

//finds the fields in your login form

var loginField = document.getElementById('userName');

var passwordField = document.getElementById('password');

//fills in your username and password

loginField.value = myUsername;

passwordField.value = myPassword;

//automatically submits the login form

var loginForm = document.getElementById ('loginButton');

loginForm.click()