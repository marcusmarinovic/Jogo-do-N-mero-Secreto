// Criação de variáveis
let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Função de exibição na tela, sem retorno de informação
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela ('h1', 'Jogo Secreto')
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10')

// Função sem parâmetro e sem retorno, apenas para verificação
function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!!');
        // Variáveis de tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativa = `Vôce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativa);
        // Ativando o botão de "Novo Jogo"
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        } 
        // tentativas = tentativas + 1
        tentativas++;
        // limpando o campo
        limparCampo();
    }
}

// Função sem parâmetro, porém com retorno
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random() * 10 + 1);
    let elementosNaLista = numerosSorteados.length;

    if (elementosNaLista == 10) {
        numerosSorteados = []
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push (numeroEscolhido);
        return numeroEscolhido;
    }
}

// Limpar campo de chute
function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

// Reiniciando o jogo 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela ('h1', 'Jogo Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
    document.getElementById ('reinciar').setAttribute('disabled', true)
}
