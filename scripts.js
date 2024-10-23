/*
JavaScript e qualquer linguagem de programação

Variável= Um pedaço da memoria do computador que eu posso guardar o que eu quiser.
Para criar uma variavel escrevo a palavra let dou um nome pra essa variavel e dentro dela coloco o que eu quiser, "texto", img,e etc
Ex: criei uma variavél e dento dela eu guardei um texto, como que faço para recuperar?


Funções(não é função matemática)

*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
    video.muted = !video.muted
}

// ! = inverso / inverte tudo
// Se tá mudo, ele vai tocar, se tiver tocando elevai deixar mudo.

//MOSTRAR O MODAL

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

//TOCAR O SOM

window.addEventListener("load", tocarAudio)


function tocarAudio(){
audio.play()
}
