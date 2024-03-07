const input = document.querySelector('#item');
//const button = document.querySelector('button');
const buttonAgregarElemento = document.querySelector('#btn');
const ul = document.querySelector('ul');
let id = 1;
buttonAgregarElemento.addEventListener('click', agregarElemento);

input.addEventListener('keyup', function (e){
    if( e.keyCode === 13){
        agregarElemento()
    }
});

function agregarElemento(){
    const listaLi = document.createElement('li');
    const buttonLi = document.createElement('button');
    if(input.value != ''){
        listaLi.textContent = input.value;
        buttonLi.textContent = "Eliminar de la lista";
        listaLi.setAttribute('id', 'lista'+id);
        buttonLi.setAttribute('id', 'btn'+id);
        buttonLi.setAttribute('onClick', 'eliminarElemento(this.id)');
        id++;
        ul.appendChild(listaLi);
        listaLi.appendChild(buttonLi);
        input.value='';
        //console.log(listaLi.id);
        input.focus();
    }
    

}

function eliminarElemento( idBoton){
    console.log(idBoton);
    const botonEliminar = document.getElementById(idBoton);
    const idLista = "lista" + idBoton.slice(3,idBoton.length + 1);
    console.log(idLista);
    const listaEliminar = document.getElementById(idLista);
    listaEliminar.remove();
    botonEliminar.remove();
    
}