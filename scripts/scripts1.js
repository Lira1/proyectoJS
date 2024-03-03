//Tarea 1
function tarea1 (){
    let admin;
    let userName;
    userName = "Jhon"
    admin = userName;
    alert("Nombre: "+admin);
}

//Tarea2
function tarea2(){
    let planetName = "Tierra";
    let currentUserName = "Jhon";
    console.clear();
    console.log("planetName= "+planetName);
    console.log("currentUserName= "+currentUserName);
}

function tarea3(){
    console.clear();
    console.log("" + 1 + 0);
    console.log("" - 1 + 0);
    console.log(true + false);
    console.log(6 / "3");
    console.log("2" * "3");
    console.log(4 + 5 + "px");	
    console.log("$" + 4 + 5);
    console.log("4" - 2);
    console.log("4px" - 2);
    console.log("  -9  " + 5);		
    console.log("  -9  " - 5);	
    console.log(null + 1);
    console.log(undefined + 1);	
    console.log(" \t \n" - 2);
}

function tarea4(){
    let a = prompt("¿Primer número?", 1);
    let b = prompt("¿Segundo número?", 2);
    a = parseInt(a);
    b = parseInt(b);
    alert(a + b); // 12
    /*Otra solucion es agregar un + 
        Ejemplo
        let a = +prompt("¿Primer número?", 1);
        let b = +prompt("¿Segundo número?", 2);
        
        Una tercer solucion es:
        alert(+a + +b);*/
}

function tarea5(){
    let userName;
    let userNameLogin = false;
    let password;

    userName = prompt("Ingresa el nombre de usuario");
    if(userName === "")
        alert("Proceso fue cancelado");
    else if(userName !== "Admin")
        alert("No te conozco");
    else{
        alert("Hola " +userName);
        userNameLogin = true;
    }

    if(userNameLogin){
        password = prompt("Ingresa el Password");
        if (password === "")
            alert("Cancelado");
        else if (password==="TheMaster")
            alert("Bienvenido")
        else
            alert("Password incorrecto")
        
    }
}



function add7(numero){
    if(numero == null)
        alert("Operacion cancelada");
    else if(numero !== ''){
    numero = parseFloat(numero);
    console.log(numero);
    console.log(typeof numero);
    if(!isNaN(numero))
        alert( 7 + +numero);
    else
        alert("Ingrese un numero valido");
    }
    else 
        alert("La cadena esta vacia");
}

function multi(){
    let m1;
    let m2;
    m1 = prompt("Ingresa el primero numero a multiplicar");
    if(m1 == null || isNaN(m1))
        alert("Numero no valido, se cancela la operacion");
    else {
        m2 = prompt("Ingresa el segundo numero a multiplicar");
        if(m2 == null || isNaN(m2))
            alert("Numero no valido, se cancela la operacion");
        else
            alert(m1 + " * " + m2 + " = " + multiply(m1, m2));
    }
}

function multiply(factor1, factor2){
    return factor1*factor2;
}
function capital(){
    let palabra = prompt("Ingresa una palabra: ");
    alert(capitalize(palabra));
}
function capitalize(cadena){
    if(cadena!=null){
    if(cadena.length>0)
        cadena = cadena.toLowerCase();
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }
    else return "Cadena Vacia"
}

function last(){
    let cadena = prompt("Ingresa una cadena de texto: ")
    alert(lastletter(cadena));
}

function lastletter(cadena){
    let ultimaLetra;
    if (cadena != null){
        if(cadena.length>0)
            ultimaLetra=cadena.charAt(cadena.length-1)
        else
            ultimaLetra = "Cadena vacia"
        console.log(ultimaLetra);
    return ultimaLetra;
    }
    else
        return "cadena vacia";
}