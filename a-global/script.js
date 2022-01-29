window.alert('Ola! seja bem vindo')
window.confirm('Você esta ajudando a diminuir os impactos ambientais?')

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 674}px)`;
}

setInterval(carrossel, 1800);

