function ShowMenus(type){
    if (type==stories){
        
        element = document.getElementById("stories");
        element.classList.remove("ocultar");
        
        element = document.getElementById("create");
        element.classList.add("ocultar");

        element = document.getElementById("about");
        element.classList.add("ocultar");
    }
    else if (type==about){
        
        element = document.getElementById("stories");
        element.classList.add("ocultar");
        
        element = document.getElementById("create");
        element.classList.add("ocultar");

        element = document.getElementById("about");
        element.classList.remove("ocultar");
    }
    else if (type==create){
        
        element = document.getElementById("stories");
        element.classList.add("ocultar");
        
        element = document.getElementById("create");
        element.classList.remove("ocultar");

        element = document.getElementById("about");
        element.classList.add("ocultar");
    }
}

// la funcion no funciona... por ahora
// function SaveCustomStory(Usuario,Titulo,Texto){
//     Usuario = document.getElementById("Usuario")
//     Titulo = document.getElementById("Texto")
//     Texto = document.getElementById("LaHistoria")
    
//     const container = document.getElementById("showcustom")
//     const textousuario = document.createElement("p");
    
//     textousuario.textContent=Usuario
//     container.appendChild(textousuario)

//     const textotitulo = document.createElement("p")
//     textotitulo.textContent=Titulo
//     container.appendChild(textotitulo)

//     const textohistoria = document.createElement("p")
//     textohistoria.textContent=Texto
//     container.appendChild(textohistoria)
// }
