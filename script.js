// Função de Contagem ao Vivo
function updateCountup() {
    const startDate = new Date("2024-10-25T17:45:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countup").innerText = 
        `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos juntos `;
}

setInterval(updateCountup, 1000);

// Frases de Amor Rotativas
const quotes = [
    "Com você, até o silêncio vira música.",
    "Você é a paz que eu sempre procurei no meio do caos.",
    "Te ter por perto é o melhor presente que a vida me deu.",
    "A cada dia, eu te amo um pouco mais.",
    "Você é o detalhe que faz tudo valer a pena.",
    "Te amo, e isso é o começo de tudo."
];
let quoteIndex = 0;

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    document.getElementById("quote").innerText = `"${quotes[quoteIndex]}" — Guilherme`;
}

setInterval(changeQuote, 5000);
