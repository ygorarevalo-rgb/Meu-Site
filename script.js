// Animação de aparecimento ao rolar a página

const elementos = document.querySelectorAll(
    "section, .card"
);


function aparecerAoScroll(){

    elementos.forEach(elemento => {

        const alturaTela = window.innerHeight;

        const distanciaTopo = elemento.getBoundingClientRect().top;


        if(distanciaTopo < alturaTela - 100){

            elemento.classList.add("mostrar");

        }

    });

}


window.addEventListener(
    "scroll",
    aparecerAoScroll
);


aparecerAoScroll();





// Efeito de digitação no título

const texto = "Analista de Dados | Business Intelligence | Desenvolvedor Front-End";

const titulo = document.querySelector(".principal h2");


let index = 0;


function escrever(){

    if(index < texto.length){

        titulo.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escrever, 50);

    }

}



// limpa o texto original antes da animação

titulo.innerHTML = "";

escrever();






// Ano automático no rodapé

const ano = new Date().getFullYear();


document.querySelector("footer p").innerHTML =

`© ${ano} Ygor Gabriel | Portfólio`;