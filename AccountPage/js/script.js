document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'zidan';
    const correctPassword = 'zidan';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert("login berhasil");
        window.location.href =  '/weblanding/succes.html';
    }else{
        alert("salah bro");
    }
});