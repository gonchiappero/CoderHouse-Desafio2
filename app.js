
function listadoProductos(){
    let cantidad = 0;
    let precio = 0
    let listado = Number(prompt('Elija el producto que desea comprar: \n1) Lampara Prisma - $8400 c/u \n2) Lampara Media Esfera Cerrada - $5750 c/u \n3) Lampara Media Esfera Abierta - $5250 c/u \n4) Lampara Tripode - $5300 c/u \n5) Lampara Cubo Blanca/Negra - $6400 c/u '))

    switch(listado){
        case 1 : alert('Usted elegio Lampara Prisma')
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 8400;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `);
                 break;

        case 2 : alert('Usted elegio Lampara Media Esfera Cerrada');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 5750;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 break;


        case 3 : alert('Usted elegio Lampara Media Esfera Abierta');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 5250;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 break;

        case 4 : alert('Usted elegio Lampara Tripode');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 5300;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 break;

        case 5 : alert('Usted elegio Lampara Cubo Blanca/Negra');
                 cantidad = Number(prompt("Cuantas desea llevar?"));
                 precio = 6400;
                 total = calcularCostoTotal(precio, cantidad);
                 alert(`Total a pagar: $${total} `)
                 break;

                
        default : alert("Opcion Incorrecta"); 
        break;

    }
    
}
listadoProductos();

function calcularCostoTotal(precio, cantidad){
    total = precio * cantidad
    return total;
}



















