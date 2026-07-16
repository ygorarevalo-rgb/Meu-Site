// =====================================
// SWIPER
// =====================================

const swiper = new Swiper(".mySwiper", {

    loop: true,

    centeredSlides: true,

    spaceBetween: 30,

    grabCursor: true,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

        },

        768: {

            slidesPerView: 2,

        },

        1200: {

            slidesPerView: 3,

        }

    }

});

// =====================================
// NAVBAR AO ROLAR A PÁGINA
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(12px)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

        document.querySelectorAll(".navbar a").forEach(link=>{

            link.style.color="#2D2538";

        });

    }

    else{

        header.style.background="transparent";
        header.style.boxShadow="none";

        document.querySelectorAll(".navbar a").forEach(link=>{

            link.style.color="white";

        });

    }

});

// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=`.6s ${index*0.15}s`;

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});

// =====================================
// ANIMAÇÃO DA HERO
// =====================================

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    hero.style.opacity="0";

    hero.style.transform="translateY(40px)";

    hero.style.transition=".9s";

    setTimeout(()=>{

        hero.style.opacity="1";
        hero.style.transform="translateY(0)";

    },300);

});

// =====================================
// EFEITO NOS BOTÕES
// =====================================

const botoes=document.querySelectorAll(".btn-principal,.btn-nav");

botoes.forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.boxShadow="0 18px 35px rgba(183,156,237,.45)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.boxShadow="";

    });

});