var username = document.querySelector('input[type="text"]');
var password = document.querySelector('input[type="password"]');
var email = document.querySelector('input[type="email"]');
var btn = document.querySelector('input[type="submit"]');
var myForm = document.querySelector('form');

btn.addEventListener("click",formValidacija);

function formValidacija(e) {
  e.preventDefault();
  // var usernameVal = username.value;
  // var passwordVal = password.value;
  // var emailVal = email.value;

  var userData = {
    uv : username.value,
    pv : password.value,
    ev : email.value
  }

  var errors = [];

  if (userData.uv.length > 20) {
    username.style.border = "1px solid tomato";
    errors.push("Predugacak username");
  }
  if (userData.pv != "12345") {
    password.style.border = "1px solid tomato";
    errors.push("password nije tacan");
  }
  if (userData.ev.indexOf("@gmail.com") == -1) {
    email.style.border = "1px solid tomato";
    errors.push("Email mora biti gmail");
  }

  if (errors.length != 0) {
    // ima greske

    }else {
    // sve ok
    myForm.submit();
  }


}
