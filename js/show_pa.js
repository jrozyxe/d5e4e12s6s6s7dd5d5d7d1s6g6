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