const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de bolo de chocolate?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "E de bolo de cenoura?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "Gosta de bolo de milho?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "Bolo de fubá tbm?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "Vocẽ gosta mesmo de bolo?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();