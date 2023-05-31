function ListaRespostaDoBot(input) {

    //Perguntas sobre cinema
    if (input == "Quando surgiu o cinema?") {
        return `O início do cinema foi em 1895, quando os irmãos Louis e Auguste Lumière projetaram um filme pela primeira vez, em um café em Paris.
“Sortie de L’usine Lumière à Lyon” (Empregados deixando a Fábrica Lumière) foi criado por Louis Lumière e é considerada a primeira obra a ser projetada, um curta-metragem que contava com 45 segundos de duração.`;
    } else if (input == "Qual foi o primeiro filme 3D?") {
        return "O primeiro filme 3D da história é datado de 1922 e recebeu o nome de The Power of Love";
    } else if (input == "Qual o filme mais longo do mundo?") {
        return "Trata-se de Ambiancé (2020), dirigido por Anders Weberg. Com 720 horas, de duração ou 30 dias, o longa-metragem representa um protesto contra a refilmagem de obras clássicas do cinema.";
    } else if (input == "Qual o filme com a maior bilheteria?") {
        return "Avatar segue sendo o filme com maior bilheteria global da história (sem ajuste de inflação). Após um breve período em que Vingadores: Ultimato ficou no topo da lista, o longa de James Cameron recuperou a primeira posição com um relançamento especial nos cinemas.";
    } else if (input == "Qual o seu filme favorito?") {
        return "Hmm, é díficil escolher, mas eu gosto muito do filme 'Capitão Fantástico'.";
    } else if (input == "Qual filme devo assistir?") {
        return "Sou suspeito para falar, mas amo o filme 'Wall-e'. Ele está disponível na plataforma da Disney Plus." + '<br>' + "Você pode acessá-lo aqui:" + '<br><br>' + '<span class="badge text-bg-info"><a href="https://www.disneyplus.com/pt-br/movies/wall-e/5G1wpZC2Lb6I">&#127916</a></span>';
    }

    // Cumprimento, despedida e mensagem inválida
    if (input == "Oi" || input == input == "Ei" || input == "E aí" || input == "Olá" || input == "Bom dia" || input == "Boa tarde" || input == "Boa noite") {
        return "Olá, cinéfilo";
    } else if (input == "Tchau" || input == "Até mais" || input == "Adeus" || input == "Finalizar") {
        return "Foi ótimo conversar com você! Até a próxima";
    } else {
        return "Tente perguntar outra coisa";
    }
}