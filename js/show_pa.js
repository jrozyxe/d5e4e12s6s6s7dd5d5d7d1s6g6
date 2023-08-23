document.addEventListener('click', function (event) {
	if (event.target.id !== 'show_password') return;
	var password = document.querySelector('#password');
	if (!password) return;
	if (event.target.checked) {
		password.type = 'text';
	} else {
		password.type = 'password';
	}
}, false);

var input = document.getElementById("password");
var text = document.getElementById("cap_alert_text");
input.addEventListener("keyup", function(event) {
if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});
