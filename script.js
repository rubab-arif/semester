function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;


    // Check if username or password fields are empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return; // Stop further execution if fields are empty
    }

    // Save user data to session Storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    alert('Sign up successful');
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';

    //redirect to the login page after successful signup
    window.location.href = "login.html";
}



function login(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    // Check if username or password fields are empty
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return; // Stop further execution if fields are empty
    }

    // Retrieve user data from session Storage
   const savedUsername = sessionStorage.getItem('username');
   const savedPassword = sessionStorage.getItem('password');

   if(username === savedUsername && password === savedPassword){
    alert('Login successful');
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';

    //redirect to index page after successful login
    window.location.href = 'index.html';
}else{
    alert('Invalid username and password');
}
}


