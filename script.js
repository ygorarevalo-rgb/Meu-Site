// ===============================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// ===============================


const elementos = document.querySelectorAll(
    "section, .card, .certificado"
);



function revelarElementos(){

    elementos.forEach(elemento => {


        const altura = elemento.getBoundingClientRect().top;


        const tela = window.innerHeight;



        if(altura < tela - 100){

            elemento.classList.add("mostrar");

        }


    });

}



window.addEventListener(
    "scroll",
    revelarElementos
);



revelarElementos();








// ===============================
// EFEITO SUAVE NOS LINKS DO MENU
// ===============================


const links = document.querySelectorAll(
    "nav a"
);



links.forEach(link => {


    link.addEventListener(
        "click",
        function(e){


            e.preventDefault();


            const destino = document.querySelector(
                this.getAttribute("href")
            );



            destino.scrollIntoView({

                behavior:"smooth"

            });



        }
    );


});








// ===============================
// ANO AUTOMÁTICO DO FOOTER
// ===============================


const footer = document.querySelector("footer p");



if(footer){

    const ano = new Date().getFullYear();


    footer.innerHTML =
    `© ${ano} Ygor Gabriel | Portfólio`;

}








// ===============================
// EFEITO NOS CARDS
// ===============================


const cards = document.querySelectorAll(".card");



cards.forEach(card => {


    card.addEventListener(
        "mouseenter",
        () => {


            card.style.boxShadow =
            "0 15px 35px rgba(63,169,245,0.25)";


        }
    );



    card.addEventListener(
        "mouseleave",
        () => {


            card.style.boxShadow =
            "none";


        }
    );


}); 