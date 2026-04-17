const tipoAtendimento = document.getElementById("tipoAtendimento");
const tomLinguagem = document.getElementById("tomLinguagem");
const botao = document.getElementById("iniciarTeste");
const respostaBot = document.getElementById("respostaBot");
const limparChat = document.getElementById("limparChat");

botao.addEventListener("click", function () {
    limparChat.addEventListener("click", function () {
    respostaBot.innerHTML = "<p>A resposta aparecerá aqui.</p>";
});
    const tipo = tipoAtendimento.value;
    const tom = tomLinguagem.value;

    let resposta = "";

    if (tipo === "" || tom === "") {
        resposta = "Por favor, selecione o tipo de atendimento e o tom de linguagem.";
    } else if (tipo === "vendas" && tom === "casual") {
        resposta = "Oi! Que bom te ver por aqui 😄 Quer que eu te mostre nossas opções de forma rápida e simples?";
    } else if (tipo === "vendas" && tom === "profissional") {
        resposta = "Olá. Posso apresentar nossas soluções e ajudar você a encontrar a opção mais adequada.";
    } else if (tipo === "suporte" && tom === "casual") {
        resposta = "Oi! Me conta o que aconteceu e eu vou tentar te ajudar da melhor forma.";
    } else if (tipo === "suporte" && tom === "profissional") {
        resposta = "Olá. Descreva o problema encontrado para que eu possa orientar você com mais precisão.";
    }

   respostaBot.innerHTML += `
    <div class="mensagem-usuario">
        <p>Tipo: ${tipo} | Linguagem: ${tom}</p>
    </div>

    <div class="mensagem-bot">
        <p>${resposta}</p>
    </div>
`;
});