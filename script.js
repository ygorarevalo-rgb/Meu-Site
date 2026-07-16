// ===============================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// ===============================
const elementos = document.querySelectorAll("section, .card, .certificado");

function revelarElementos() {
    elementos.forEach(elemento => {
        const altura = elemento.getBoundingClientRect().top;
        const tela = window.innerHeight;
        if (altura < tela - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", revelarElementos);
revelarElementos(); // Executa uma vez ao carregar a página

// ===============================
// EFEITO SUAVE NOS LINKS DO MENU
// ===============================
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        
        // Verifica se o link é uma âncora interna (ex: #sobre-mim)
        if (href && href.startsWith("#") && href !== "#") {
            e.preventDefault();
            const destino = document.querySelector(href);
            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// ===============================
// ANO AUTOMÁTICO DO FOOTER
// ===============================
const footer = document.querySelector("footer p");
if (footer) {
    const ano = new Date().getFullYear();
    footer.innerHTML = `&copy; ${ano} Ygor Gabriel | Portfólio`;
}

// ===============================
// EFEITO NOS CARDS
// ===============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    // Garante que o card tenha uma transição suave para a sombra
    card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";
    
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 15px 35px rgba(63,169,245,0.25)";
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});
