function abrirConvite(){


let luz = document.querySelector(".luz");

let envelope = document.querySelector(".envelope");



/* ativa a luz */

luz.style.opacity = "0.9";




/* espera e remove o envelope */


setTimeout(()=>{


envelope.classList.add("sumir");


},1200);





/* revela o convite e os botões */


setTimeout(()=>{


document.querySelector(".convite")
.classList.add("mostrar");



document.querySelector(".botoes")
.classList.add("mostrar");



},2300);



}







/* BOTÃO LOCAL */


function localFesta(){


window.open(

"https://maps.app.goo.gl/ib6wrbn6XUW4Lqyu7",

"_blank"

);


}








/* BOTÃO CONFIRMAR PRESENÇA */


function confirmar(){


window.open(

"https://yasmimfelix705-a11y.github.io/convite-yasmim-15/",

"_blank"

);


}








/* BOTÃO PRESENTEAR */


function presentear(){


window.open(

"lista-presentes.html",

"_blank"

);


}
