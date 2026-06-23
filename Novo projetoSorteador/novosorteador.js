const imagens = [
    "logos/flamengo.png",
    "logos/vasco.png",
    "logos/fluminense.png",
    "logos/botafogo.png"
];

const img = document.getElementById("imagemAtual");
const btn = document.getElementById("btnParar");

let rodando = true;
let intervalo;

function iniciar() {

    intervalo = setInterval(() => {

        const indice =
            Math.floor(Math.random() * imagens.length);

        img.src = imagens[indice];

    }, 30); // muito rápido

}

iniciar();

btn.addEventListener("click", () => {

    if(rodando){

        clearInterval(intervalo);

        btn.textContent = "INICIAR";

        rodando = false;

    }else{

        iniciar();

        btn.textContent = "PARAR";

        rodando = true;
    }

});