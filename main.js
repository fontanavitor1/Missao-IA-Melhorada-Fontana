const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acredita que o isolamento social gerado pela interação virtual pode afetar a saúde emocional?",
        alternativas: [
            {
                texto: "Sim, acredito que a falta de interações presenciais pode levar ao aumento da solidão e de problemas emocionais.",
                afirmacao: " O isolamento social causado pela interação virtual pode resultar em um aumento de sentimentos de solidão e ansiedade.",
            },
            {
                texto: "Não, acho que as interações online ainda permitem conexões suficientes para manter o equilíbrio emocional. ",
                afirmacao: "Permitem conexões suficientes para manter o equilíbrio emocional, desde que o uso seja equilibrado. ",
            }
        ]
    },
    {
        enunciado: "Na sua opinião, as redes sociais e plataformas digitais ajudam ou dificultam o acesso a informações confiáveis?",
        alternativas: [
            {
                texto: " As redes sociais dificultam o acesso a informações confiáveis, devido à propagação de fake news e desinformação.  ",
                afirmacao: " As redes sociais dificultam o acesso a informações confiáveis, pois a propagação de fake news e desinformação muitas vezes ofusca o conteúdo legítimo, criando um ambiente de confusão e desconfiança ",
            },
            {
                texto: "As redes sociais oferecem oportunidades de acesso a informações relevantes e rápidas, mas exigem discernimento para filtrar o que é verdadeiro ",
                afirmacao: " Embora as redes sociais ofereçam uma abundância de informações, é necessário discernir corretamente o que é verdadeiro, tornando-se essencial o desenvolvimento da capacidade crítica do usuário para filtrar as fontes confiáveis.",
            }
        ]
    },
    {
        enunciado: "Você acha que a coleta de dados pessoais na internet é um risco para a privacidade?",
        alternativas: [
            {
                texto: " Sim, a coleta de dados pessoais representa um risco considerável para a privacidade e pode ser usada de maneira indevida.",
                afirmacao: " A coleta massiva de dados pessoais na internet representa um risco significativo à privacidade dos usuários, uma vez que esses dados podem ser utilizados indevidamente por empresas ou indivíduos com más intenções. ",
            },
            {
                texto: "Não, desde que as empresas sigam normas de proteção de dados, os riscos podem ser minimizados, e a coleta pode ser benéfica.",
                afirmacao: "A coleta de dados pessoais não é um risco, desde que as empresas sigam normas de segurança e proteção de dados, garantindo que os usuários sejam informados e que suas informações sejam tratadas com transparência.",
            }
        ]
    },
    {
        enunciado: "Você acredita que a dependência de tecnologias e redes sociais pode prejudicar a produtividade e as relações pessoais?",
        alternativas: [
            {
                texto: " Sim, a dependência digital pode causar vícios e diminuir o tempo dedicado a atividades produtivas e relacionamentos reais. ",
                afirmacao: "A dependência de tecnologias e redes sociais pode diminuir a produtividade e prejudicar as relações pessoais, pois muitas vezes as pessoas acabam se isolando e deixando de interagir de forma significativa no mundo real.",
            },
            {
                texto: " Não, acredito que as tecnologias podem ser usadas de forma equilibrada, ajudando na produtividade e facilitando o contato com amigos e familiares. ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: "As tecnologias e redes sociais, quando usadas de forma equilibrada, podem aumentar a produtividade e facilitar a comunicação, mantendo as pessoas conectadas com familiares, amigos e colegas de trabalho.",
        alternativas: [
            {
                texto: " Sim, a desigualdade digital impede que muitas pessoas tenham as mesmas oportunidades educacionais e profissionais ",
                afirmacao: "A desigualdade digital é um problema crítico, pois impede que muitas pessoas, especialmente em regiões carentes, tenham acesso a oportunidades educacionais, profissionais e sociais, exacerbando a exclusão social.",
            },
            {
                texto: "Não, acredito que com o tempo a tecnologia se tornará acessível a todos, diminuindo a desigualdade digital.",
                afirmacao: "Embora a desigualdade digital seja uma preocupação, acredito que a tecnologia se tornará cada vez mais acessível, e em breve todos terão as mesmas oportunidades de participar da revolução digital. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiafinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click" , () => respostaSelocionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

function respostaSelocionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiafinal +=  afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível pausar o avanço da tecnologia por um instante, talvez pudéssemos entender melhor os impactos que ela causa nas relações humanas, na privacidade e na nossa própria identidade";
    textoResultado.textContent = historiafinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();