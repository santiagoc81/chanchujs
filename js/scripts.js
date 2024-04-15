//Inicializo las variables que voy a usar
// servicio:  via prompt para que el usuario elija entre Diseño web o hosting
let servicio=''; // Scope Global, la ingresare via prompt
// hostingSize: si elige hosting, le pedire el tamaño 
let hostingSize ='';
// emailCount: Si elige hosting, le pedire la cantidad de casillas de emails que necesita
let emailCount ='';
// pagesCount: Si es Webpage, le pedire la cantidad de paginas
let pagesCount ='';
// requireAnimations: Si es Webpage preguntaré si necesita animaciones
let requireAnimations ='';
//Inicializo en 0 el valor del presupuesto
let valorTotal = 0;


//Aviso que sucederá
alert('Para solicitar tu presupuesto te solicitaremos: \n 1) El tipo de servicio. \n 2) Tamaño o cantidad de paginas');
// Pido los datos
pidoDatos()
// Calculo el presupuesto
calculoPresupuesto()
// Lo imprimo en la consola
imprimoPresupuesto()

// Funciones
function pidoDatos() {
    const servicios = ['Hosting', 'Web']
    do {
        servicio = prompt("Ingrese el servicio a contratar: \n - Hosting \n - Web")
        
    } while((servicio != servicios[0])&&(servicio != servicios[1]));
    console.log('El servicio seleccionado es: ' + servicio)
    switch (servicio) {
        case 'Hosting':
            hostingSize= parseInt(prompt("Ingrese la cantidad de sitios webs que desea almacenar "))
            emailCount= parseInt(prompt("Ingrese la cantidad correos electronicos que necesita "))
        break;
        case 'Web':
            pagesCount= parseInt(prompt("Ingrese la cantidad de paginas que necesita en su web "))
            requireAnimations= confirm("Necesita tener animaciones? \n Si -> OK \n No -> Cancel")
        break;
    }
}

function calculoPresupuesto() {

    if (servicio == 'Hosting') {
        valorTotal = (hostingSize * 50) + (emailCount *5)
        presupuesto = { 
            product: 'Hosting',
            sites: hostingSize,
            emails: emailCount,
            total: "$" + valorTotal
        }
    }
    else
    {
        if (requireAnimations){ 
            valorTotal = (pagesCount * 15) + 100
        }
        else{
            valorTotal = (pagesCount * 15)
        }
        presupuesto = { 
            product: 'Web',
            pages: pagesCount,
            animationsNeeded: requireAnimations,
            total: "$" + valorTotal
        }
    }
}

function imprimoPresupuesto(){
    console.table(presupuesto)
    alert('El detalle del presupuesto está en la consola :)')
}