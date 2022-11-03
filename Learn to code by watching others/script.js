const form = document.getElementById('form');

form?.addEventListener("submit", (e) => {
	e.preventDefault();

	const firstName = form['firstname'].value;
	const lastName = form['lastname'].value;
	const email = form['email'].value;
	const password = form['password'].value;

	if (firstName === '') {
		addErrorTo('firstname', 'First Name is required');
	} else {
        removeErrorFrom('firstname');
    }

	if (lastName === '') {
		addErrorTo('lastname', 'Last Name is required');
	} else {
		removeErrorFrom('lastname');
	}
    
    if (email === '') {
		addErrorTo('email', 'Email Address is required');
	} else if (!isValid(email)) {
		addErrorTo("email", "Email Address is not valid");
	} else {
		removeErrorFrom("email");
	}

	if (password === '') {
		addErrorTo('password', 'Password is required');
	} else {
		removeErrorFrom('password');
	}
});

function addErrorTo(field, message) {
    const inputText = form[field].parentNode;
    inputText.classList.add('error');

	const small = inputText.querySelector('small');
    small.innerText = message;
	small.style.opacity = '1';
}

function removeErrorFrom(field) {
    const inputText = form[field].parentNode;
	inputText.classList.remove('error');

    const small = inputText.parentNode.querySelector('small');
	small.style.opacity = '0';
}

function isValid(email) {
	var re =
		/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return re.test(String(email).toLowerCase());
}
