document.querySelector("#boton").addEventListener("click", function(){
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const imc = calcularIMC(peso, altura);
    document.querySelector("#resultado").innerHTML = imc.toFixed(2);
});
function calcularIMC(peso, altura){
    const resultado = peso / (altura*altura);
    if (resultado<18.5) {
        document.querySelector("#respuesta").innerHTML = "Estas en bajo peso";
    } else if (resultado>18.5 && resultado<24.9) {
        document.querySelector("#respuesta").innerHTML = "Estas en el peso adecuado";
    } else if (resultado>24.9 && resultado<29.9) {
        document.querySelector("#respuesta").innerHTML = "Estas en sobrepeso";
    }else {
        document.querySelector("#respuesta").innerHTML = "Tienes obesidad";
    }
    return resultado;
}