var username = document.getElementById("username");
var password = document.getElementById("password");

function store() {
    localStorage.setItem("username");
    localStorage.setItem("password");
}

function check() {
    var storeUsername = localStorage.getItem("username");
    var storePassword = localStorage.getItem("password");

    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (storeUsername != username.value || storePassword != password.value) {
        alert("Login successful.");
    } else {
        alert("Get out of here!!!");
    }

}

