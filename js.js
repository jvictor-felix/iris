console.log("funcionando")

var voltar = document.querySelector("#voltar");
var passar = document.querySelector("#passar");
var tela_atual = document.getElementById("tela-atual")
var divs_tela_atual = tela_atual.querySelectorAll("div");
var main = document.querySelector("main");
var divs_main = document.querySelectorAll("p");

var interador = 0;
var interador_anterior = 0;

voltar.addEventListener("click", ()=>{
    interador_anterior = interador;
    if(interador > 0){
        interador = interador - 1;
    }
    
    if(interador == 0){
        divs_tela_atual[0].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[0].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
        if(interador_anterior == 0){
            divs_main[interador_anterior].classList.add("tela-ativada");
            divs_tela_atual[interador_anterior].style.backgroundColor = "red";
        }
    }
    if(interador == 1){
        divs_tela_atual[1].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[1].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
    if(interador == 2){
        divs_tela_atual[2].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[2].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
    if(interador == 3){
        divs_tela_atual[3].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[3].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
})

passar.addEventListener("click", ()=>{
    interador_anterior = interador;
    if(interador < 3){
        interador++;
    }
    console.log("teste")
    if(interador == 0){
        divs_tela_atual[0].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[0].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
    if(interador == 1){
        divs_tela_atual[1].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[1].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
    if(interador == 2){
        divs_tela_atual[2].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[2].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
    }
    if(interador == 3){
        divs_tela_atual[3].style.backgroundColor = "red";
        divs_tela_atual[interador_anterior].style.backgroundColor = "white";
        divs_main[3].classList.add("tela-ativada");
        divs_main[interador_anterior].classList.remove("tela-ativada");
        if(interador_anterior == 3){
            divs_tela_atual[interador_anterior].style.backgroundColor = "red";
            divs_main[interador_anterior].classList.add("tela-ativada");
        }

    }
    
})