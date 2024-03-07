// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const tagP = document.createElement('p');
tagP.classList.add('parrafo');
tagP.textContent = '¡Oye, soy rojo!';
tagP.style.color = 'red';

container.appendChild(tagP);

const encabezado3 = document.createElement('h3')
encabezado3.classList.add('encabezado');
encabezado3.textContent = '¡Soy un h3 azul!';
encabezado3.style.color = 'blue';

container.appendChild(encabezado3);

const divHijo = document.createElement('div');
divHijo.classList.add('div-hijo');
divHijo.style.cssText= 'border: 2px solid black; background-color: pink';

const encabezado = document.createElement('h1');
encabezado.classList.add('encabezado1');
encabezado.textContent =  "Estoy en un div!!";
const tagp2 = document.createElement('p');
tagp2.classList.add('parrafo');
tagp2.textContent = "Yo tambien!!!";
divHijo.appendChild(encabezado);


divHijo.appendChild(tagp2);

container.appendChild(divHijo);

/*
Agregue los siguientes elementos al contenedor usando SÓLO JavaScript y los métodos DOM que se muestran arriba.

a <p>con texto rojo que dice "¡Oye, soy rojo!"
un <h3>con texto azul que dice "¡Soy un h3 azul!"
a <div>con un borde negro y color de fondo rosa con los siguientes elementos en su interior:
otro <h1>que dice "estoy en un div"
un <p>que dice “¡YO TAMBIÉN!”
Sugerencia para este: después de crear <div>con createElement, añádale <h1>y <p>antes de agregarlo al contenedor.
 */
