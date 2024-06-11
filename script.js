const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Você gosta de bolo de chocolate?", 
        alternativas:[
            "Sim",
            "Não",
        ]
    },
    {
        enunciado:"E de bolo de cenoura?", 
        alternativas:[
            "Sim",
            "Não",
        ]
    },
    {
        enunciado:"Gosta de bolo de milho?", 
        alternativas:[
            "Sim",
            "Não",
        ]
    },
    {
        enunciado:"Bolo de fubá tbm?", 
        alternativas:[
            "Sim",
            "Não",
        ]
    },
    {
        enunciado:"Vocẽ gosta mesmo de bolo?", 
        alternativas:[
            "Sim",
            "Não",
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();