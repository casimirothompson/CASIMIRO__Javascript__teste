let Div = document.getElementsByTagName("div");

let botao = document.querySelector("button");


function mudaRed(){
    let div1 = Div[0].classList;

    div1.toggle("red--dark")
}

function mudaBlue(){
    let div1 = Div[2].classList;

    div1.toggle("blue--dark")
}

function mudaGreen(){
    let div1 = Div[1].classList;

    div1.toggle("green--dark")
}


function mudaCor(){
    mudaRed();
    mudaGreen();
    mudaBlue();
}
botao.addEventListener("click", mudaCor);