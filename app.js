let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   console.log(numeroSecreto);
   console.log(intentos);

   if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces" }`);
    document.getElementById("reiniciar").removeAttribute("disabled");
   }else{
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p" , "El numero Secreto es menor");
    }else{
        asignarTextoElemento("p" , "El numero secreto es mayor"); }

        intentos++;
        limpiarCaja();
   }

   return;
}

function limpiarCaja(){
document.querySelector("#valorUsuario").value = "";


}

function generarNumeroScreto() {
    let numeroGnenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGnenerado)
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista 
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p" , "Ya se sortearon todos los numeros posibles");
    }else{


    if (listaNumerosSorteados.includes(numeroGnenerado)) {
        return generarNumeroScreto();
    }else{
        listaNumerosSorteados.push(numeroGnenerado);
        return numeroGnenerado;
    }
    }

    
}

function condicionesIniciales() {

   asignarTextoElemento("h1" , "Juego del Numero Screto!");
   asignarTextoElemento("p" , `Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto =  generarNumeroScreto();
   intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de nuemero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
    

}

condicionesIniciales();



