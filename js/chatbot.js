// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var conteudo = this.nextElementSibling;

        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        }

    });
}



// função para coletar a hora do momento e informar no formato 00:00
function informarHora() {
    let hoje = new Date();
    hora = hoje.getHours();
    minutos = hoje.getMinutes();

    if (hora < 10) {
        hora = "0" + hora;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    let horario = hora + ":" + minutos;

    return horario;
}

//Exibe a primeira mensagem do chatbot para o usuário começar a integarir

function mensagemPadrao() {
    let primeiraMensagem = "Olá! Bem vindo(a). Eu sou o SólidesBot e estou aqui para conversarmos sobre filmes";
    document.getElementById("botMensagemPadrao").innerHTML = '<p class="botText"><span>' + primeiraMensagem + '</span></p>';

    let horario = informarHora();

    $("#chat-horario").append(horario);
    document.getElementById("userInput").scrollIntoView(false);
}

mensagemPadrao();

// Função queimprime a resposta do bot de acordo com o texto do usuário
function respostaBot(userText) {
    let respostaBot = ListaRespostaDoBot(userText);

    let botHTML = '<p class="botText"><span>' + respostaBot + '</span></p>';
    $("#chatbox").append(botHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Função que pega a resposta do usuário por meio do valor do input

function pegaRespostaUser() {
    let userText = $("#textInput").val(); //oi

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        respostaBot(userText);
    }, 1000);
}

// Função que envia a mensagem via botão

function botaoEnviar() {
    pegaRespostaUser();
}

$("#textInput").keypress(function (e) {
    if (e.which == 13) {  // No JQuery o '13' corresponde ao keycode da tecla 'enter'
        pegaRespostaUser();
    }
});