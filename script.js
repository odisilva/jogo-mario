const mario = document.querySelector('.mario'); // Seleciona o Mario
const pipe = document.querySelector('.pipe'); // Seleciona o tubo (pipe)
const restartButton = document.querySelector('.restart-btn'); // Botão de reiniciar
const scoreElement = document.getElementById('score'); // Elemento onde a pontuação será exibida
let score = 0; // Inicializa a pontuação

// Função para o pulo do Mario
const jump = () => {
    mario.classList.add('jump'); // Adiciona a classe de pulo ao Mario

    // Incrementa a pontuação cada vez que o Mario pula
    score++;
    scoreElement.textContent = score; // Atualiza o texto da pontuação

    setTimeout(() => {
        mario.classList.remove('jump'); // Remove a classe de pulo após o tempo da animação
    }, 500); // Duração do pulo em milissegundos
}

// Função de loop para verificar colisões
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição do tubo
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição do Mario

    // Verifica a colisão do Mario com o tubo
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'; // Para a animação do tubo
        pipe.style.left = `${pipePosition}px`; // Posiciona o tubo na posição atual

        mario.style.bottom = `${marioPosition}px`; // Define a posição do Mario

        mario.src = './imagens/game-over.png'; // Muda a imagem do Mario para "game-over"
        mario.style.width = '75px'; // Reduz o tamanho do Mario
        mario.style.margin.left = '50px'; // Alinha o Mario

        // Exibe o botão de reiniciar
        restartButton.style.display = 'block'; // Torna o botão visível

        clearInterval(loop); // Para o loop de verificação
    }
}, 10); // Intervalo do loop

// Função para reiniciar o jogo
const restartGame = () => {
    location.reload(); // Recarrega a página, reiniciando o jogo
}

// Evento de pulo ao pressionar qualquer tecla
document.addEventListener('keydown', jump);

// Evento de clique para reiniciar o jogo
restartButton.addEventListener('click', restartGame);

