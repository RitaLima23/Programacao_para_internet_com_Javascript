function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar() {
    window.open("https://globallabs.academy/"); //abre em outra aba
    window.location.href = "https://globallabs.academy/"; //abre na mesma janela
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"; //troca o texto
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*var nome = "Rita Lima";
var idade = 25;
alert(nome + " tem " + idade + " anos !");*/