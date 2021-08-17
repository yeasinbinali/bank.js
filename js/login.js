document.getElementById('submit-btn').addEventListener('click', function(){
    // 1. get user email
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;

    // 2. get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // 3. check email & password
    if (userEmail == 'yba@gmail.com' && userPassword == 'yba'){
        window.location.href = 'banking.html';
    }
})