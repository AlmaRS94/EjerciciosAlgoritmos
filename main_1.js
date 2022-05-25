/*/NO USAR EN PRODUCCION
//USO EXCLUSIVO DE PRUEBAS

//Mensaje de alerta
alert("Hola, soy un mensaje");

//Confirmacion 

confirm("¿Estas deacuerdo?");

Pregunta - cuadro de texto - Ok
prompt("cual es tu nombre", ""); */

//let chilaquiles = confirm("¿Te gustan los chilaquiles?");
//console.log(chilaquiles);

/*
if(chilaquiles){
    alert("Felicidades!!");
} else if (confirm("¿Te gustan los chilaquiles rojos?")) {
    alert("Felicidades!!");
} else {
    alert("Deberias de probarlos");
}*/

//If Ternario 
//(condicion)?verdadero:falso
/* let mensaje = (chilaquiles)?
                "Feliciades!!!!" : 
                (confirm("y los rojos?"))? "Muy bien":
                "deberias de probarlos!!";
 alert.long(mensaje)*/
/*let enchiladas = prompt("que enchiladas te gustan?", "verdes rojos mole potosinas");
switch (enchiladas) {
    case "verdes":
        alert("Felicidades!!!");
    break;
    case "rojos":
    case "mole":
    case "potosinas":
        alert("invita");
    break;

    default:
        alert("Deberias de probarlos");
        break;
}*/

/*OPERACIONES DE COMPARACION
/*Comparacion
== igual
>  mayor que
>=
<  menor que
<= 
!= no igual
*/
//Compara el valor y tipo de dato
let a = 7;
let b = 11;
console.log( a == b);
console.log( a > b);
console.log( a >= b);
console.log( a < b);
console.log( a <= b);
console.log( a != b);
console.log( a !== b);

/*operadores logicos
AND - Y / &&
OR - O  / ||
NOT - No
*/
console.clear();
console.log( (a>b) && (a!=b) );//las dos condiciones se tienen que cumplir
console.log( (a>b) || (a!=b) );//Cualquiera de las dos que se cumpla
console.log(        ! (a>b)  );








