
const phoneInput = document.getElementById('num');
const passInput = document.getElementById('pass');
const loginBtn = document.getElementById('login_btn');

loginBtn.addEventListener('click', function () {
    const phone = phoneInput.value.trim();
    const password = passInput.value.trim();

    if (phone !== "" && password !== "" && phone === password) {
        window.location.href = "news_page/index.html"; 
    } else {
        alert("Phone number or password invalid!");
    }

    phoneInput.value = "";
    passInput.value = "";
})