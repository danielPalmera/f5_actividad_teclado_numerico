let columnas = Number(prompt("Ingrese la cantidad de columnas "))
let numeros = Number(prompt("Ingrese la cantidad maxima de numeros"))

if(isNaN(columnas) || isNaN(numeros)){
    alert("Los valores indicados no son validos")
}else{
    /**
    -*- Calcula el Ancho
    **/
    const anchoTecla = 120
    let anchoEsperado = anchoTecla*columnas
    anchoEsperado=anchoEsperado+"px"

    let content = document.getElementById("contenedor");
    content.style.width=anchoEsperado
    
    let div = document.createElement("div");
    /*Agrego los numeros del 1 al 9*/
    for (let i = 1; i <= numeros; i++) {
        div = document.createElement("div");
        div.classList.add("tecla")
        div.textContent=i;
        content.appendChild(div);
    }
}