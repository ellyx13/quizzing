document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'demo@gmail.com' && password === 'orbit') {
        window.location.href = 'home.html';
    } else {
        alert('Email or password are incorrect')
    }
});