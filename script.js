// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================


const titulo = document.querySelector(".conteudo h2");


const texto = 
"Business Intelligence | Análise de Dados | Gestão";


let index = 0;


titulo.innerHTML = "";



function escreverTexto(){

    if(index < texto.length){

        titulo.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escreverTexto, 50);

    }

}


escreverTexto();






// ===============================
// ANIMAÇÃO AO SCROLL
// ===============================


const elementos = document.querySelectorAll(
    "section, .card, .certificado"
);



function mostrarElementos(){


    elementos.forEach(elemento => {


        const posicao = elemento.getBoundingClientRect().top;


        const alturaTela = window.innerHeight;



        if(posicao < alturaTela - 100){


            elemento.classList.add("mostrar");


        }


    });



}



window.addEventListener(
    "scroll",
    mostrarElementos
);



mostrarElementos();








// ===============================
// ANO AUTOMÁTICO FOOTER
// ===============================



const ano = new Date().getFullYear();



const footer = document.querySelector("footer p");



if(footer){

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

            card.style.transform =
            "translateY(-12px) scale(1.03)";

        }
    );



    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0) scale(1)";

        }
    );



});








// ===============================
// MENU MOBILE
// ===============================



const links = document.querySelectorAll(
    "nav a"
);



links.forEach(link => {


    link.addEventListener(
        "click",
        () => {


            window.scrollTo({

                behavior:"smooth"

            });


        }
    );


});