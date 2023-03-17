let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');
let title = document.querySelector('title');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');

signupToggleBtn.onclick = () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    title.textContent = 'Signup form';
}

loginToggleBtn.onclick = () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    title.textContent = 'Login form';
}

function saveUser() { 
    var username = document.getElementById("username1").value; 
    var email = document.getElementById("email1").value; 
    var password = document.getElementById("password1").value; 
    var user = { username: username, email: email, password: password }; 
    localStorage.setItem(email, JSON.stringify(user)); 
}

function login() { 
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value;
    // Check if email and password match stored values in local storage            
    if (localStorage.getItem(email) && JSON.parse(localStorage.getItem(email)).password === password) {
        // Redirect to success page                
        window.location.href = "#";
        return false;
    } 
    else {
        alert("Incorrect email or password.");
        return false;
    }
}