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