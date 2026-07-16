// ================================
// ANO AUTOMÁTICO NO RODAPÉ
// ================================

const footer = document.querySelector("footer p");

const ano = new Date().getFullYear();

footer.innerHTML = 
`© ${ano} Ygor Gabriel Arevalo | Business Intelligence & Dados`;



// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const sections = document.querySelectorAll("section");


function mostrarSecoes(){

    const alturaTela = window.innerHeight;


    sections.forEach(secao => {

        const distancia = secao.getBoundingClientRect().top;


        if(distancia < alturaTela - 100){

            secao.classList.add("show");

        }

    });

}


window.addEventListener("scroll", mostrarSecoes);

mostrarSecoes();



// ================================
// MENU ATIVO
// ================================

const links = document.querySelectorAll("nav a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        links.forEach(item=>{

            item.style.color="#cbd5e1";

        });


        link.style.color="#38bdf8";


    });


});