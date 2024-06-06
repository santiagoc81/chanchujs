//Defino mi lista de precios:
const precios = [
    {name:'hosting', price: 50 },
    {name:'email', price: 5},
    {name:'web', price: 100 },
    {name:'paginas', price: 10},
    {name:'animaciones', price: 50}
]

// clase Presupuesto
class Presupuesto {
    constructor(service,tamanoHosting,numeroEmails,numeroPaginas,quiereAnimaciones,total) {
    this.service = service;
    this.numeroEmails = numeroEmails;
    this.numeroPaginas = numeroPaginas;
    this.quiereAnimaciones = quiereAnimaciones;
    this.total = total;
    }
    // Funcion que envio lista de precios y va calculando el presupuesto
    async calculoTotal(precios) {
        // Iniciar el total en 0
        let total = 0;

        // Sumar el costo de emails
        if (this.numeroEmails > 0) {
            total += precios.find(p => p.name === 'email').price * this.numeroEmails;
        }
        // Sumar el costo de web si se seleccionó el servicio web
        if (this.service === 'web') {
            total += precios.find(p => p.name === 'web').price;
        }
        // Sumar el costo de web si se seleccionó  el servicio web
        if (this.service === 'hosting') {
            total += precios.find(p => p.name === 'hosting').price;
        }
        // Sumar el costo de paginas
        if (this.numeroPaginas > 0) {
            total += precios.find(p => p.name === 'paginas').price * this.numeroPaginas;
        }
        // Sumar el costo de animaciones si se quieren animaciones
        if (this.quiereAnimaciones) {
            total += precios.find(p => p.name === 'animaciones').price;
        }

        // Guardar el total calculado en la propiedad total del objeto
        this.total = total;

        //actualizo DOM para previsualizar el presupuesto
        actualizarPrevisualizacion(total);

    }
}

const presupuesto = new Presupuesto();

//DOM: cuando selecciono un servicio muestro las otras opciones del forumario
document.getElementById('servicio').addEventListener('change', function() {
    let elemento1 = document.getElementById('webpage');
    if (this.value === 'WEB') {  
        elemento1.classList.add('mostrar');
        elemento1.classList.remove('oculto');
        sessionStorage.setItem('servicio', 'WEB');
        presupuesto.service='web';
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('servicio', 'WEB');
        sessionStorage.setItem('total', presupuesto.total);
    } else {
        elemento1.classList.remove('mostrar');
        elemento1.classList.add('oculto');
        

    }
    let elemento2 = document.getElementById('hosting');
    if (this.value === 'HOSTING') {  
        elemento2.classList.add('mostrar');
        elemento2.classList.remove('oculto');
        //actualizo presupuesto
        presupuesto.service='hosting';
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('servicio', 'HOSTING');
        sessionStorage.setItem('total', presupuesto.total);

    } else {
        elemento2.classList.remove('mostrar');
        elemento2.classList.add('oculto');
    }
});


document.getElementById('paginas').addEventListener('change', function() {
    let elemento = this.value;
        presupuesto.numeroPaginas=elemento;
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('paginas', elemento);
        sessionStorage.setItem('total', presupuesto.total);
});

document.getElementById('animaciones').addEventListener('change', function() {
    let elemento = this.value;
    if (elemento === 'SI') {
        presupuesto.quiereAnimaciones= true;
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('animaciones', true);
        sessionStorage.setItem('total', presupuesto.total);
    }
    else {
        presupuesto.quiereAnimaciones= false;
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('animaciones', false);
        sessionStorage.setItem('total', presupuesto.total);

    }
});

document.getElementById('emails').addEventListener('change', function() {
    let elemento = this.value;
        presupuesto.numeroEmails=elemento;
        presupuesto.calculoTotal(precios);
        //guardo en localStorage
        sessionStorage.setItem('emails', elemento);
        sessionStorage.setItem('total', presupuesto.total);
});

//Funcion para actualizar el valor de previsualizacion de presupuesto en la web
function actualizarPrevisualizacion(total) {
    // Seleccionar el div con el id previsualizacion
    let divPrevisualizacion = document.getElementById('previsualizacion');
    
    // Seleccionar el span dentro del div
    let span = divPrevisualizacion.querySelector('span');
    
    // Actualizar el contenido del span con la variable TOTAL
    span.textContent = '$' + total;
}









