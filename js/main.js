function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
}

function redirecionar() {
    window.open("https://www.google.com.br"); //Abre em uma nova guia
    window.location.href = "https://www.google.com.br"; //Abre na mesma guia
}

function trocar(elemento) {
    elemento.innerHTML= "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    console.log("Página carregada");

}

function change(elemento) {
    console.log(elemento.value);
}