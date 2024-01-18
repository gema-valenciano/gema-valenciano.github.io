var cesta = [];
document.querySelector("#añadir").addEventListener("click", function (){ // Las funciones con addEventListener siempre tienen que ser anonimas porque no las vamos a llamar desde ninguna parte
    var producto = document.getElementById('producto').value;
    // Esto es necesario para que no coja al pulsar añadir una cadena de caracteres vacia como array ya que trim borra el dato
    if (producto.trim().length>0){
        // Push añade el dato al final, si quisieramos añadirlo al principio es con unshift
        cesta.push(producto);
    }
});

// Si queremos darle nombre a la funcion teneos que hacerlo de la siguiente manera: 
document.querySelector("#consultar").addEventListener("click", mostrarProducto);

function mostrarProducto(){
    let divCesta = document.querySelector("#mostrar_producto");
    console.log(cesta);
    if (cesta.length==0){
        document.querySelector("#mostrar_producto").innerHTML = "La cesta esta vacia";
    } else{
        // Para que los datos salgan como una lista:
        divCesta.innerHTML = "";
        cesta.forEach(item =>{
            divCesta.innerHTML += `<br>- ${item}`;
        })
    }
}