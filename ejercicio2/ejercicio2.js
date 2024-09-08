function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        message.innerHTML = 'Por favor, complete todos los campos.';
        return false;
    }

    if (!validateEmail(email)) {
        message.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
