//Este script es para traer el valor TOTAL del Session Storage y mostrarlo en la pagina


function mostrarPresupuesto() {
    // Obtener el elemento div donde se mostrará el presupuesto    
    let divPresupuesto = document.getElementById('presupuesto');
    
    // Obtener el total del presupuesto desde sessionStorage
    let totalPresupuesto = sessionStorage.getItem('total');
    
    // Si el total está definido y no es null, mostrarlo en el div
    if (totalPresupuesto) {
        //obtengo el presupuesto en JSON:
        let presupuestoJson = guardoSessionStorageAJSON()
        
        //Almaceno el presupuesto en el servidor con FETCH
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Preupuesto',
            body: presupuestoJson,
            userId: 1, //Simulo un userID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        //
        divPresupuesto.innerHTML = "El presupuesto total es de $" + totalPresupuesto;

        //Genero alerta para mostrar el presupuesto con mayor foco usando libreria swett alerts
        Swal.fire({
            title: "Presupuesto Finalizado",
            text: "El presupuesto total es de $" + totalPresupuesto,
            icon: "success"
          });

    } else {
        // Si no hay un total definido, mostrar un mensaje de error
        divPresupuesto.innerHTML = "No hay un presupuesto creado todavia.";
    }
}
// Llamar a la función para que el mensaje se muestre al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarPresupuesto();
});


//Recorro sessionSotorage y devuelvo un json para almacenar en el servidor
function guardoSessionStorageAJSON() {
    
    let datos = {};

    // Recorro  todas las claves de sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
        // Obtener la clave en la posición i
        let key = sessionStorage.key(i);
        // Obtener el valor asociado a la clave
        let value = sessionStorage.getItem(key);
        // Asignar el valor al objeto usando la clave
        datos[key] = value;
    }

    // Convertir el objeto a JSON para devolverlo
    let jsonSessionStorage = JSON.stringify(datos);

    return jsonSessionStorage;
}
