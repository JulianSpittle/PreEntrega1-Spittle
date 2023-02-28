function motoDisponible () {
    let presupuesto = parseInt(prompt('Por favor ingrese su presupuesto, si quiere salir ingrese "0": '));
    while ( presupuesto != '0' ) {
        if ( presupuesto < 500000 ) {
            alert('Tu presupuesto no alcanza para ninguna moto de las que tenemos, por favor ingrese uno mayor a 500000: ');
        } else if ( presupuesto >= 500000 && presupuesto < 1200000 ){
            alert('Tu presupuesto es suficiente para motos entre 125cc y 300cc');
            alert('Por favor acercate a la agencia para ver las motos en stock');
        } else if ( presupuesto >= 1200000 && presupuesto <= 3000000 ){
            alert('Tu presupuesto es suficiente para motos entre 300cc y 600cc');
            alert('Por favor acercate a la agencia para ver las motos en stock');
        } else {
            alert('Tu presupuesto es suficiente para comprar cualquier moto hasta 1200cc');
            alert('Por favor acercate a la agencia para ver las motos en stock');
        } 
        presupuesto = parseInt(prompt('Por favor ingrese el presupuesto que quiere gastar, anote "0" para salir: '));
    }
    alert('Hasta luego');
}
motoDisponible ();