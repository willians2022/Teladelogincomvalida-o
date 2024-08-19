function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login == "admin" && senha == "admin") {
        alert("sucesso");
        location.href = "https://www.microsoft.com/pt-br/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f%3frealm%3dhotmail.com&sdf=0"
    } else {
        alert("usuario  e senha  incorreta");
    }
}