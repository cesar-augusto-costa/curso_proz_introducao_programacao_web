const documento = document;
console.log(documento);

const titulo = document.getElementById("titulo");
console.log(titulo);

const textos = document.getElementsByClassName("texto-simples");
console.log(textos);

for(var i = 0; i < textos.length; i++){
    console.log(textos[i]);
}

const segundoTitulo = document.querySelector("div h2");
console.log(segundoTitulo);

const textosPorClasse  = document.querySelectorAll(".texto-simples");
console.log(textosPorClasse);