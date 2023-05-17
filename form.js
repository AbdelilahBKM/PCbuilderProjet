var users = [
    {
        email: 'user1@email.com',
        password: 'password1'
    }, {
        email: 'user2@email.com',
        password: 'password2'
    }, {
        email: 'user3@email.com',
        password: 'password3'
    },
];

function login() {
    const email_input = document.querySelector('#email').value;
    const password_input = document.querySelector('#password').value;
    const invalid_email = document.querySelector('.invalid-email');
    const invalid_password = document.querySelector('.invalid-password');
    if (email_input == '') {
        invalid_email.innerHTML = 'please enter your email adress!';
        return false;
    }
    if (password_input == '') {
        invalid_password.innerHTML = 'please enter your password!';
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email_input) {}
        if (users[i].email === email_input && users[i].password === password_input) {
            return true;
        }
    }
    invalid_email.innerHTML = 'invalid credentials';
    return false;
}

function showPassword() {
    const password_input = document.querySelector('#password');
    if (password_input.type == 'password') {
        password_input.type = 'text';
    } else {
        password_input.type = 'password';
    }
}
