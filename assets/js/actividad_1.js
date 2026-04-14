let content = document.getElementById("contenedor");

let div = document.createElement("div");
/*Agrego los numeros del 1 al 9*/
for (let i = 1; i < 10; i++) {
    div = document.createElement("div");
    div.classList.add("tecla")
    div.textContent=i;
    content.appendChild(div);
}

/* agrego * 0 y # */
div = document.createElement("div");
div.classList.add("tecla")
div.textContent="*";
content.appendChild(div);

div = document.createElement("div");
div.classList.add("tecla")
div.textContent=0;
content.appendChild(div);

div = document.createElement("div");
div.classList.add("tecla")
div.textContent="#";
content.appendChild(div);