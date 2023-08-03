AOS.init();

function definirCookie(nome, valor, dias) {
    var expira = "";
    if (dias) {
        var data = new Date();
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
        expira = "; expires=" + data.toUTCString();
    }
    document.cookie = nome + "=" + (valor || "") + expira + "; path=/";
}

function obterCookie(nome) {
    var nomeEQ = nome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nomeEQ) === 0) return c.substring(nomeEQ.length, c.length);
    }
    return null;
}

function aceitarCookies() {
    definirCookie("cookieConsent", "true", 365); // Defina o cookie para durar 365 dias
    document.getElementById("aviso-cookies").style.display = "none";
}

window.onload = function () {
    var consentimentoCookie = obterCookie("cookieConsent");
    if (!consentimentoCookie) {
        document.getElementById("aviso-cookies").style.display = "block";
    }
};