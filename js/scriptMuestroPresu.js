//Este script es para traer el valor TOTAL del Session Storage y mostrarlo en la pagina


function mostrarPresupuesto() {
    // Obtener el elemento div donde se mostrará el presupuesto    
    let divPresupuesto = document.getElementById('presupuesto');
    
    // Obtener el total del presupuesto desde sessionStorage
    let totalPresupuesto = sessionStorage.getItem('total');
    
    // Si el total está definido y no es null, mostrarlo en el div
    if (totalPresupuesto) {
        divPresupuesto.innerHTML = "El presupuesto total es de $" + totalPresupuesto;
    } else {
        // Si no hay un total definido, mostrar un mensaje de error
        divPresupuesto.innerHTML = "No hay un presupuesto creado todavia.";
    }
}
// Llamar a la función para que el mensaje se muestre al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarPresupuesto();
});