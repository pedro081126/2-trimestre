const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Você gosta de bolo de chocolate?", 
        alternativas:[
            {
           texto:"Sim",
            afirmação:"afirmação",
            }
    {
        texto:"Não",
        afirmação:"afirmação",
    },
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
let historiaFinal="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    Atual++;
    mostraPergunta();
}
mostraPergunta();
